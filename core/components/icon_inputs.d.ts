import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Alchohol } from '/wotlk/core/proto/common.js';
import { BattleElixir } from '/wotlk/core/proto/common.js';
import { Explosive } from '/wotlk/core/proto/common.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { GuardianElixir } from '/wotlk/core/proto/common.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { Drums } from '/wotlk/core/proto/common.js';
import { PetFood } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { WeaponImbue } from '/wotlk/core/proto/common.js';
import { IndividualSimIconPickerConfig } from '/wotlk/core/individual_sim_ui.js';
import { Party } from '/wotlk/core/party.js';
import { Player } from '/wotlk/core/player.js';
import { Raid } from '/wotlk/core/raid.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { IconEnumPickerConfig } from './icon_enum_picker.js';
export declare const ArcaneBrilliance: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const DivineSpirit: IndividualSimIconPickerConfig<Raid, number>;
export declare const GiftOfTheWild: IndividualSimIconPickerConfig<Raid, number>;
export declare const Thorns: IndividualSimIconPickerConfig<Raid, number>;
export declare const PowerWordFortitude: IndividualSimIconPickerConfig<Raid, number>;
export declare const ShadowProtection: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const AtieshMage: IndividualSimIconPickerConfig<Party, number>;
export declare const AtieshWarlock: IndividualSimIconPickerConfig<Party, number>;
export declare const Bloodlust: IndividualSimIconPickerConfig<Party, number>;
export declare const BraidedEterniumChain: IndividualSimIconPickerConfig<Party, boolean>;
export declare const ChainOfTheTwilightOwl: IndividualSimIconPickerConfig<Party, boolean>;
export declare const CommandingShout: IndividualSimIconPickerConfig<Party, number>;
export declare const DevotionAura: IndividualSimIconPickerConfig<Party, number>;
export declare const DraeneiRacialCaster: IndividualSimIconPickerConfig<Party, boolean>;
export declare const DraeneiRacialMelee: IndividualSimIconPickerConfig<Party, boolean>;
export declare const EyeOfTheNight: IndividualSimIconPickerConfig<Party, boolean>;
export declare const FerociousInspiration: IndividualSimIconPickerConfig<Party, number>;
export declare const JadePendantOfBlasting: IndividualSimIconPickerConfig<Party, boolean>;
export declare const LeaderOfThePack: IndividualSimIconPickerConfig<Party, number>;
export declare const ManaSpringTotem: IndividualSimIconPickerConfig<Party, number>;
export declare const ManaTideTotem: IndividualSimIconPickerConfig<Party, number>;
export declare const MoonkinAura: IndividualSimIconPickerConfig<Party, number>;
export declare const RetributionAura: IndividualSimIconPickerConfig<Party, number>;
export declare const SanctityAura: IndividualSimIconPickerConfig<Party, number>;
export declare const TotemOfWrath: IndividualSimIconPickerConfig<Party, number>;
export declare const TrueshotAura: IndividualSimIconPickerConfig<Party, boolean>;
export declare const WrathOfAirTotem: IndividualSimIconPickerConfig<Party, number>;
export declare const BloodPact: IndividualSimIconPickerConfig<Party, number>;
export declare const DrumsOfBattleBuff: IndividualSimIconPickerConfig<Party, boolean>;
export declare const DrumsOfRestorationBuff: IndividualSimIconPickerConfig<Party, boolean>;
export declare const BlessingOfKings: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const BlessingOfMight: IndividualSimIconPickerConfig<Player<any>, number>;
export declare const BlessingOfSalvation: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const BlessingOfSanctuary: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const BlessingOfWisdom: IndividualSimIconPickerConfig<Player<any>, number>;
export declare const Innervate: IndividualSimIconPickerConfig<Player<any>, number>;
export declare const PowerInfusion: IndividualSimIconPickerConfig<Player<any>, number>;
export declare const UnleashedRage: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const BloodFrenzy: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const HuntersMark: IndividualSimIconPickerConfig<Raid, number>;
export declare const ImprovedScorch: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const ImprovedSealOfTheCrusader: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const JudgementOfWisdom: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const JudgementOfLight: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const Mangle: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const Misery: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const ShadowWeaving: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const CurseOfElements: IndividualSimIconPickerConfig<Raid, number>;
export declare const CurseOfRecklessness: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const FaerieFire: IndividualSimIconPickerConfig<Raid, number>;
export declare const ExposeArmor: IndividualSimIconPickerConfig<Raid, number>;
export declare const SunderArmor: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const WintersChill: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const GiftOfArthas: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const DemoralizingRoar: IndividualSimIconPickerConfig<Raid, number>;
export declare const DemoralizingShout: IndividualSimIconPickerConfig<Raid, number>;
export declare const Screech: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const ThunderClap: IndividualSimIconPickerConfig<Raid, number>;
export declare const InsectSwarm: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const ScorpidSting: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const ShadowEmbrace: IndividualSimIconPickerConfig<Raid, boolean>;
export declare const SuperSapper: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const GoblinSapper: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const KiblersBits: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const ScrollOfAgilityV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const ScrollOfSpiritV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const ScrollOfStrengthV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const ScrollOfProtectionV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const PetScrollOfAgilityV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const PetScrollOfStrengthV: IndividualSimIconPickerConfig<Player<any>, boolean>;
export declare const GraceOfAirTotem: {
    id: ActionId;
    states: number;
    improvedId: ActionId;
    changedEvent: (party: Party) => TypedEvent<void>;
    getValue: (party: Party) => TristateEffect;
    setValue: (eventID: EventID, party: Party, newValue: number) => void;
};
export declare const StrengthOfEarthTotem: {
    id: ActionId;
    states: number;
    improvedId: ActionId;
    improvedId2: ActionId;
    changedEvent: (party: Party) => TypedEvent<void>;
    getValue: (party: Party) => number;
    setValue: (eventID: EventID, party: Party, newValue: number) => void;
};
export declare const WindfuryTotem: {
    id: ActionId;
    states: number;
    improvedId: ActionId;
    changedEvent: (party: Party) => TypedEvent<void>;
    getValue: (party: Party) => 1 | 0 | 2;
    setValue: (eventID: EventID, party: Party, newValue: number) => void;
};
export declare const BattleShout: {
    id: ActionId;
    states: number;
    improvedId: ActionId;
    improvedId2: ActionId;
    changedEvent: (party: Party) => TypedEvent<void>;
    getValue: (party: Party) => number;
    setValue: (eventID: EventID, party: Party, newValue: number) => void;
};
export declare const makePotionsInput: (options: Potions[]) => IconEnumPickerConfig<Player<any>, Potions>;
export declare const makeConjuredInput: (options: Conjured[]) => IconEnumPickerConfig<Player<any>, Conjured>;
export declare const makeFlasksInput: (options: Flask[]) => IconEnumPickerConfig<Player<any>, Flask>;
export declare const makeBattleElixirsInput: (options: BattleElixir[]) => IconEnumPickerConfig<Player<any>, BattleElixir>;
export declare const makeGuardianElixirsInput: (options: GuardianElixir[]) => IconEnumPickerConfig<Player<any>, GuardianElixir>;
export declare const makeFoodInput: (options: Food[]) => IconEnumPickerConfig<Player<any>, Food>;
export declare const makeAlcoholInput: (options: Alchohol[]) => IconEnumPickerConfig<Player<any>, Alchohol>;
export declare const makePetFoodInput: (options: PetFood[]) => IconEnumPickerConfig<Player<any>, PetFood>;
export declare const DrumsInput: IconEnumPickerConfig<Player<any>, Drums>;
export declare const FillerExplosiveInput: IconEnumPickerConfig<Player<any>, Explosive>;
export declare function makeWeaponImbueInput(isMainHand: boolean, options: Array<WeaponImbue>): IconEnumPickerConfig<Player<any>, WeaponImbue>;