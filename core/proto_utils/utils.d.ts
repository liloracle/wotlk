import { Player } from '/wotlk/core/proto/api.js';
import { ResourceType } from '/wotlk/core/proto/api.js';
import { Class } from '/wotlk/core/proto/common.js';
import { Enchant } from '/wotlk/core/proto/common.js';
import { Gem } from '/wotlk/core/proto/common.js';
import { ItemSlot } from '/wotlk/core/proto/common.js';
import { Item } from '/wotlk/core/proto/common.js';
import { Race } from '/wotlk/core/proto/common.js';
import { Faction } from '/wotlk/core/proto/common.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { WeaponType } from '/wotlk/core/proto/common.js';
import { Blessings } from '/wotlk/core/proto/paladin.js';
import { BlessingsAssignments } from '/wotlk/core/proto/ui.js';
import { Stats } from './stats.js';
import { BalanceDruid, FeralDruid, FeralTankDruid, BalanceDruid_Rotation as BalanceDruidRotation, FeralDruid_Rotation as FeralDruidRotation, FeralTankDruid_Rotation as FeralTankDruidRotation, DruidTalents, BalanceDruid_Options as BalanceDruidOptions, FeralDruid_Options as FeralDruidOptions, FeralTankDruid_Options as FeralTankDruidOptions } from '/wotlk/core/proto/druid.js';
import { ElementalShaman, EnhancementShaman_Rotation as EnhancementShamanRotation, ElementalShaman_Rotation as ElementalShamanRotation, ShamanTalents, ElementalShaman_Options as ElementalShamanOptions, EnhancementShaman_Options as EnhancementShamanOptions, EnhancementShaman } from '/wotlk/core/proto/shaman.js';
import { Hunter, Hunter_Rotation as HunterRotation, HunterTalents, Hunter_Options as HunterOptions } from '/wotlk/core/proto/hunter.js';
import { Mage, Mage_Rotation as MageRotation, MageTalents, Mage_Options as MageOptions } from '/wotlk/core/proto/mage.js';
import { Rogue, Rogue_Rotation as RogueRotation, RogueTalents, Rogue_Options as RogueOptions } from '/wotlk/core/proto/rogue.js';
import { RetributionPaladin, RetributionPaladin_Rotation as RetributionPaladinRotation, PaladinTalents, RetributionPaladin_Options as RetributionPaladinOptions } from '/wotlk/core/proto/paladin.js';
import { ProtectionPaladin, ProtectionPaladin_Rotation as ProtectionPaladinRotation, ProtectionPaladin_Options as ProtectionPaladinOptions } from '/wotlk/core/proto/paladin.js';
import { ShadowPriest, SmitePriest_Rotation as SmitePriestRotation, ShadowPriest_Rotation as ShadowPriestRotation, PriestTalents, ShadowPriest_Options as ShadowPriestOptions, SmitePriest_Options as SmitePriestOptions, SmitePriest } from '/wotlk/core/proto/priest.js';
import { Warlock, Warlock_Rotation as WarlockRotation, WarlockTalents, Warlock_Options as WarlockOptions } from '/wotlk/core/proto/warlock.js';
import { Warrior, Warrior_Rotation as WarriorRotation, WarriorTalents, Warrior_Options as WarriorOptions } from '/wotlk/core/proto/warrior.js';
import { DeathKnight, DeathKnight_Rotation as DeathKnightRotation, DeathKnightTalents, DeathKnight_Options as DeathKnightOptions } from '/wotlk/core/proto/deathknight.js';
import { ProtectionWarrior, ProtectionWarrior_Rotation as ProtectionWarriorRotation, ProtectionWarrior_Options as ProtectionWarriorOptions } from '/wotlk/core/proto/warrior.js';
export declare type DruidSpecs = [Spec.SpecBalanceDruid, Spec.SpecFeralDruid, Spec.SpecFeralTankDruid];
export declare type HunterSpecs = Spec.SpecHunter;
export declare type MageSpecs = Spec.SpecMage;
export declare type RogueSpecs = Spec.SpecRogue;
export declare type PaladinSpecs = [Spec.SpecRetributionPaladin, Spec.SpecProtectionPaladin];
export declare type PriestSpecs = [Spec.SpecShadowPriest, Spec.SpecSmitePriest];
export declare type ShamanSpecs = [Spec.SpecElementalShaman, Spec.SpecEnhancementShaman];
export declare type WarlockSpecs = Spec.SpecWarlock;
export declare type WarriorSpecs = [Spec.SpecWarrior, Spec.SpecProtectionWarrior];
export declare const NUM_SPECS: number;
export declare const naturalSpecOrder: Array<Spec>;
export declare const specNames: Record<Spec, string>;
export declare const classColors: Record<Class, string>;
export declare const specIconsLarge: Record<Spec, string>;
export declare const talentTreeIcons: Record<Class, Array<string>>;
export declare const titleIcons: Record<Spec, string>;
export declare const raidSimIcon: string;
export declare function getTalentTree(talentsString: string): number;
export declare function getTalentTreeIcon(spec: Spec, talentsString: string): string;
export declare function getSpecSiteUrl(spec: Spec): string;
export declare const raidSimSiteUrl: string;
export declare type RotationUnion = BalanceDruidRotation | FeralDruidRotation | FeralTankDruidRotation | HunterRotation | MageRotation | ElementalShamanRotation | EnhancementShamanRotation | RogueRotation | RetributionPaladinRotation | ProtectionPaladinRotation | ShadowPriestRotation | WarlockRotation | WarriorRotation | ProtectionWarriorRotation | SmitePriestRotation | DeathKnightRotation;
export declare type SpecRotation<T extends Spec> = T extends Spec.SpecBalanceDruid ? BalanceDruidRotation : T extends Spec.SpecElementalShaman ? ElementalShamanRotation : T extends Spec.SpecEnhancementShaman ? EnhancementShamanRotation : T extends Spec.SpecFeralDruid ? FeralDruidRotation : T extends Spec.SpecFeralTankDruid ? FeralTankDruidRotation : T extends Spec.SpecHunter ? HunterRotation : T extends Spec.SpecMage ? MageRotation : T extends Spec.SpecRogue ? RogueRotation : T extends Spec.SpecRetributionPaladin ? RetributionPaladinRotation : T extends Spec.SpecProtectionPaladin ? ProtectionPaladinRotation : T extends Spec.SpecShadowPriest ? ShadowPriestRotation : T extends Spec.SpecWarlock ? WarlockRotation : T extends Spec.SpecWarrior ? WarriorRotation : T extends Spec.SpecProtectionWarrior ? ProtectionWarriorRotation : T extends Spec.SpecSmitePriest ? SmitePriestRotation : T extends Spec.SpecDeathKnight ? DeathKnightRotation : ElementalShamanRotation;
export declare type TalentsUnion = DruidTalents | HunterTalents | MageTalents | RogueTalents | PaladinTalents | PriestTalents | ShamanTalents | WarlockTalents | WarriorTalents;
export declare type SpecTalents<T extends Spec> = T extends Spec.SpecBalanceDruid ? DruidTalents : T extends Spec.SpecElementalShaman ? ShamanTalents : T extends Spec.SpecEnhancementShaman ? ShamanTalents : T extends Spec.SpecFeralDruid ? DruidTalents : T extends Spec.SpecFeralTankDruid ? DruidTalents : T extends Spec.SpecHunter ? HunterTalents : T extends Spec.SpecMage ? MageTalents : T extends Spec.SpecRogue ? RogueTalents : T extends Spec.SpecRetributionPaladin ? PaladinTalents : T extends Spec.SpecProtectionPaladin ? PaladinTalents : T extends Spec.SpecShadowPriest ? PriestTalents : T extends Spec.SpecWarlock ? WarlockTalents : T extends Spec.SpecWarrior ? WarriorTalents : T extends Spec.SpecSmitePriest ? PriestTalents : T extends Spec.SpecDeathKnight ? DeathKnightTalents : ShamanTalents;
export declare type SpecOptionsUnion = BalanceDruidOptions | ElementalShamanOptions | EnhancementShamanOptions | FeralDruidOptions | FeralTankDruidOptions | HunterOptions | MageOptions | RogueOptions | RetributionPaladinOptions | ProtectionPaladinOptions | ShadowPriestOptions | WarlockOptions | WarriorOptions | ProtectionWarriorOptions | SmitePriestOptions | DeathKnightOptions;
export declare type SpecOptions<T extends Spec> = T extends Spec.SpecBalanceDruid ? BalanceDruidOptions : T extends Spec.SpecElementalShaman ? ElementalShamanOptions : T extends Spec.SpecEnhancementShaman ? EnhancementShamanOptions : T extends Spec.SpecFeralDruid ? FeralDruidOptions : T extends Spec.SpecFeralTankDruid ? FeralTankDruidOptions : T extends Spec.SpecHunter ? HunterOptions : T extends Spec.SpecMage ? MageOptions : T extends Spec.SpecRogue ? RogueOptions : T extends Spec.SpecRetributionPaladin ? RetributionPaladinOptions : T extends Spec.SpecProtectionPaladin ? ProtectionPaladinOptions : T extends Spec.SpecShadowPriest ? ShadowPriestOptions : T extends Spec.SpecWarlock ? WarlockOptions : T extends Spec.SpecWarrior ? WarriorOptions : T extends Spec.SpecProtectionWarrior ? ProtectionWarriorOptions : T extends Spec.SpecSmitePriest ? SmitePriestOptions : T extends Spec.SpecDeathKnight ? DeathKnightOptions : ElementalShamanOptions;
export declare type SpecProtoUnion = BalanceDruid | ElementalShaman | EnhancementShaman | FeralDruid | FeralTankDruid | Hunter | Mage | Rogue | RetributionPaladin | ProtectionPaladin | ShadowPriest | Warlock | Warrior | ProtectionWarrior | SmitePriest | DeathKnight;
export declare type SpecProto<T extends Spec> = T extends Spec.SpecBalanceDruid ? BalanceDruid : T extends Spec.SpecElementalShaman ? ElementalShaman : T extends Spec.SpecEnhancementShaman ? EnhancementShaman : T extends Spec.SpecFeralDruid ? FeralDruid : T extends Spec.SpecFeralTankDruid ? FeralTankDruid : T extends Spec.SpecHunter ? Hunter : T extends Spec.SpecMage ? Mage : T extends Spec.SpecRogue ? Rogue : T extends Spec.SpecRetributionPaladin ? RetributionPaladin : T extends Spec.SpecProtectionPaladin ? ProtectionPaladin : T extends Spec.SpecShadowPriest ? ShadowPriest : T extends Spec.SpecWarlock ? Warlock : T extends Spec.SpecWarrior ? Warrior : T extends Spec.SpecProtectionWarrior ? ProtectionWarrior : T extends Spec.SpecSmitePriest ? SmitePriest : T extends Spec.SpecDeathKnight ? DeathKnight : ElementalShaman;
export declare type SpecTypeFunctions<SpecType extends Spec> = {
    rotationCreate: () => SpecRotation<SpecType>;
    rotationEquals: (a: SpecRotation<SpecType>, b: SpecRotation<SpecType>) => boolean;
    rotationCopy: (a: SpecRotation<SpecType>) => SpecRotation<SpecType>;
    rotationToJson: (a: SpecRotation<SpecType>) => any;
    rotationFromJson: (obj: any) => SpecRotation<SpecType>;
    rotationFromPlayer: (player: Player) => SpecRotation<SpecType>;
    talentsCreate: () => SpecTalents<SpecType>;
    talentsEquals: (a: SpecTalents<SpecType>, b: SpecTalents<SpecType>) => boolean;
    talentsCopy: (a: SpecTalents<SpecType>) => SpecTalents<SpecType>;
    talentsToJson: (a: SpecTalents<SpecType>) => any;
    talentsFromJson: (obj: any) => SpecTalents<SpecType>;
    talentsFromPlayer: (player: Player) => SpecTalents<SpecType>;
    optionsCreate: () => SpecOptions<SpecType>;
    optionsEquals: (a: SpecOptions<SpecType>, b: SpecOptions<SpecType>) => boolean;
    optionsCopy: (a: SpecOptions<SpecType>) => SpecOptions<SpecType>;
    optionsToJson: (a: SpecOptions<SpecType>) => any;
    optionsFromJson: (obj: any) => SpecOptions<SpecType>;
    optionsFromPlayer: (player: Player) => SpecOptions<SpecType>;
};
export declare const specTypeFunctions: Record<Spec, SpecTypeFunctions<any>>;
export declare const raceToFaction: Record<Race, Faction>;
export declare const specToClass: Record<Spec, Class>;
export declare const specToEligibleRaces: Record<Spec, Array<Race>>;
export declare function isDualWieldSpec(spec: Spec): boolean;
export declare function isTankSpec(spec: Spec): boolean;
export declare const specToLocalStorageKey: Record<Spec, string>;
export declare function withSpecProto<SpecType extends Spec>(spec: Spec, player: Player, rotation: SpecRotation<SpecType>, talents: SpecTalents<SpecType>, specOptions: SpecOptions<SpecType>): Player;
export declare function playerToSpec(player: Player): Spec;
export declare function isSharpWeaponType(weaponType: WeaponType): boolean;
export declare function isBluntWeaponType(weaponType: WeaponType): boolean;
export declare function getMetaGemEffectEP(spec: Spec, gem: Gem, playerStats: Stats): number;
export declare function canEquipItem(item: Item, spec: Spec, slot: ItemSlot | undefined): boolean;
export declare function getEligibleItemSlots(item: Item): Array<ItemSlot>;
export declare function validWeaponCombo(mainHand: Item | null | undefined, offHand: Item | null | undefined): boolean;
export declare function getEligibleEnchantSlots(enchant: Enchant): Array<ItemSlot>;
export declare function enchantAppliesToItem(enchant: Enchant, item: Item): boolean;
export declare function canEquipEnchant(enchant: Enchant, spec: Spec): boolean;
export declare const NO_TARGET = -1;
export declare function newRaidTarget(raidIndex: number): RaidTarget;
export declare function emptyRaidTarget(): RaidTarget;
export declare function makeBlankBlessingsAssignments(numPaladins: number): BlessingsAssignments;
export declare function makeBlessingsAssignments(numPaladins: number, data: Array<{
    spec: Spec;
    blessings: Array<Blessings>;
}>): BlessingsAssignments;
export declare function makeDefaultBlessings(numPaladins: number): BlessingsAssignments;
export declare const orderedResourceTypes: Array<ResourceType>;