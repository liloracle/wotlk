import { Class } from '/wotlk/core/proto/common.js';
import { ItemSlot } from '/wotlk/core/proto/common.js';
import { Profession } from '/wotlk/core/proto/common.js';
import { Race } from '/wotlk/core/proto/common.js';
import { ShattrathFaction } from '/wotlk/core/proto/common.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { ResourceType } from '/wotlk/core/proto/api.js';
export declare const raceNames: Record<Race, string>;
export declare function nameToRace(name: string): Race;
export declare const classNames: Record<Class, string>;
export declare function nameToClass(name: string): Class;
export declare const professionNames: Record<Profession, string>;
export declare const statOrder: Array<Stat>;
export declare const statNames: Record<Stat, string>;
export declare const slotNames: Record<ItemSlot, string>;
export declare const resourceNames: Record<ResourceType, string>;
export declare const resourceColors: Record<ResourceType, string>;
export declare function stringToResourceType(str: string): ResourceType;
export declare const shattFactionNames: Record<ShattrathFaction, string>;