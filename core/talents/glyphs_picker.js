import { ItemQuality } from '/wotlk/core/proto/common.js';
import { setItemQualityCssClass } from '/wotlk/core/css_utils.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import { Component } from '/wotlk/core/components/component.js';
import { Input } from '/wotlk/core/components/input.js';
import { Popup } from '/wotlk/core/components/popup.js';
const emptyGlyphData = {
    id: 0,
    name: 'Empty',
    description: '',
    iconUrl: 'https://wow.zamimg.com/images/wow/icons/medium/inventoryslot_empty.jpg',
    quality: null,
};
export class GlyphsPicker extends Component {
    constructor(parent, player, glyphsConfig) {
        super(parent, 'glyphs-picker-root');
        this.majorGlyphPickers = [];
        this.minorGlyphPickers = [];
        this.glyphsConfig = glyphsConfig;
        const majorGlyphs = Object.keys(glyphsConfig.majorGlyphs).map(idStr => Number(idStr));
        const minorGlyphs = Object.keys(glyphsConfig.minorGlyphs).map(idStr => Number(idStr));
        const majorGlyphsData = majorGlyphs.map(glyph => this.getGlyphData(glyph));
        const minorGlyphsData = minorGlyphs.map(glyph => this.getGlyphData(glyph));
        this.majorGlyphPickers = ['major1', 'major2', 'major3'].map(glyphField => new GlyphPicker(this.rootElem, player, majorGlyphsData, glyphField, true));
        this.minorGlyphPickers = ['minor1', 'minor2', 'minor3'].map(glyphField => new GlyphPicker(this.rootElem, player, minorGlyphsData, glyphField, false));
    }
    // In case we ever want to parse description from tooltip HTML.
    //static descriptionRegex = /<a href=\\"\/wotlk.*>(.*)<\/a>/g;
    getGlyphData(glyph) {
        const glyphConfig = this.glyphsConfig.majorGlyphs[glyph] || this.glyphsConfig.minorGlyphs[glyph];
        return {
            id: glyph,
            name: glyphConfig.name,
            description: glyphConfig.description,
            iconUrl: glyphConfig.iconUrl,
            quality: ItemQuality.ItemQualityCommon,
        };
    }
}
class GlyphPicker extends Input {
    constructor(parent, player, glyphOptions, glyphField, isMajor) {
        super(parent, 'glyph-picker-root', player, {
            changedEvent: (player) => player.glyphsChangeEmitter,
            getValue: (player) => player.getGlyphs()[glyphField],
            setValue: (eventID, player, newValue) => {
                const glyphs = player.getGlyphs();
                glyphs[glyphField] = newValue;
                player.setGlyphs(eventID, glyphs);
            },
        });
        if (!isMajor) {
            this.rootElem.classList.add('minor');
        }
        this.player = player;
        this.glyphOptions = glyphOptions;
        this.selectedGlyph = emptyGlyphData;
        this.rootElem.innerHTML = `<a class="glyph-picker-icon"></a>`;
        this.iconElem = this.rootElem.getElementsByClassName('glyph-picker-icon')[0];
        this.iconElem.addEventListener('click', event => {
            event.preventDefault();
            const selectorModal = new GlyphSelectorModal(this.rootElem.closest('.individual-sim-ui'), this, this.glyphOptions);
        });
        this.iconElem.addEventListener('touchstart', event => {
            event.preventDefault();
            const selectorModal = new GlyphSelectorModal(this.rootElem.closest('.individual-sim-ui'), this, this.glyphOptions);
        });
        this.iconElem.addEventListener('touchend', event => {
            event.preventDefault();
        });
        this.init();
    }
    getInputElem() {
        return this.iconElem;
    }
    getInputValue() {
        return this.selectedGlyph.id;
    }
    setInputValue(newValue) {
        this.selectedGlyph = this.glyphOptions.find(glyphData => glyphData.id == newValue) || emptyGlyphData;
        this.iconElem.style.backgroundImage = `url('${this.selectedGlyph.iconUrl}')`;
        this.iconElem.href = this.selectedGlyph.id == 0 ? '' : 'https://wowhead.com/wotlk/item=' + this.selectedGlyph.id;
    }
}
class GlyphSelectorModal extends Popup {
    constructor(parent, glyphPicker, glyphOptions) {
        super(parent);
        this.rootElem.classList.add('selector-modal');
        this.rootElem.innerHTML = `
			<div class="selector-modal-tab-content-header">
				<input class="selector-modal-search" type="text" placeholder="Search...">
			</div>
			<ul class="selector-modal-list"></ul>
    `;
        this.addCloseButton();
        const listElem = this.rootElem.getElementsByClassName('selector-modal-list')[0];
        glyphOptions = [emptyGlyphData].concat(glyphOptions);
        const listItemElems = glyphOptions.map((glyphData, glyphIdx) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('selector-modal-list-item');
            listElem.appendChild(listItemElem);
            listItemElem.dataset.idx = String(glyphIdx);
            listItemElem.innerHTML = `
        <a class="selector-modal-list-item-icon"></a>
        <a class="selector-modal-list-item-name">${glyphData.name}</a>
				<span class="selector-modal-list-item-description">${glyphData.description}</span>
      `;
            listItemElem.children[0].href = glyphData.id == 0 ? '' : 'https://wowhead.com/wotlk/item=' + glyphData.id;
            listItemElem.children[1].href = glyphData.id == 0 ? '' : 'https://wowhead.com/wotlk/item=' + glyphData.id;
            const iconElem = listItemElem.getElementsByClassName('selector-modal-list-item-icon')[0];
            iconElem.style.backgroundImage = `url('${glyphData.iconUrl}')`;
            const nameElem = listItemElem.getElementsByClassName('selector-modal-list-item-name')[0];
            setItemQualityCssClass(nameElem, glyphData.quality);
            const onclick = (event) => {
                event.preventDefault();
                glyphPicker.setValue(TypedEvent.nextEventID(), glyphData.id);
            };
            nameElem.addEventListener('click', onclick);
            iconElem.addEventListener('click', onclick);
            return listItemElem;
        });
        const updateSelected = () => {
            const selectedGlyphId = glyphPicker.selectedGlyph.id;
            listItemElems.forEach(elem => {
                const listItemIdx = parseInt(elem.dataset.idx);
                const listItemData = glyphOptions[listItemIdx];
                elem.classList.remove('active');
                if (listItemData.id == selectedGlyphId) {
                    elem.classList.add('active');
                }
            });
        };
        updateSelected();
        const applyFilters = () => {
            let validItemElems = listItemElems;
            const selectedGlyph = glyphPicker.selectedGlyph;
            validItemElems = validItemElems.filter(elem => {
                const listItemIdx = parseInt(elem.dataset.idx);
                const listItemData = glyphOptions[listItemIdx];
                if (searchInput.value.length > 0) {
                    const searchQuery = searchInput.value.toLowerCase().split(" ");
                    const name = listItemData.name.toLowerCase();
                    var include = true;
                    searchQuery.forEach(v => {
                        if (!name.includes(v))
                            include = false;
                    });
                    if (!include) {
                        return false;
                    }
                }
                return true;
            });
            let numShown = 0;
            listItemElems.forEach(elem => {
                if (validItemElems.includes(elem)) {
                    elem.classList.remove('hidden');
                    numShown++;
                    if (numShown % 2 == 0) {
                        elem.classList.remove('odd');
                    }
                    else {
                        elem.classList.add('odd');
                    }
                }
                else {
                    elem.classList.add('hidden');
                }
            });
        };
        const searchInput = this.rootElem.getElementsByClassName('selector-modal-search')[0];
        searchInput.addEventListener('input', applyFilters);
        searchInput.addEventListener("keyup", ev => {
            if (ev.key == "Enter") {
                listItemElems.find(ele => {
                    if (ele.classList.contains("hidden")) {
                        return false;
                    }
                    const nameElem = ele.getElementsByClassName('selector-modal-list-item-name')[0];
                    nameElem.click();
                    return true;
                });
            }
        });
        glyphPicker.player.glyphsChangeEmitter.on(() => {
            applyFilters();
            updateSelected();
        });
    }
}