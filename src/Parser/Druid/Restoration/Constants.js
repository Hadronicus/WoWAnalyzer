import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.REJUVENATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.CULTIVATION.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.EFFLORESCENCE_HEAL.id,
  SPELLS.CENARION_WARD_HEAL.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_BLOOM_HEAL.id,
  SPELLS.SWIFTMEND.id,
  SPELLS.RENEWAL_TALENT.id,
  SPELLS.SPRING_BLOSSOMS.id,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH.id,
  //TODO - blazyb double check if any non resto druid spells scales with healing increases.
];

export const HOTS_AFFECTED_BY_ESSENCE_OF_GHANIR = [
  SPELLS.REJUVENATION.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.CULTIVATION.id,
  SPELLS.CENARION_WARD_HEAL.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  // Make sure to check that event.tick is true, because regrowth/tranq uses the same id for the heal and the HoT part
  SPELLS.REGROWTH.id,
  SPELLS.TRANQUILITY_HEAL.id,
  //TODO - blazyb double check if any non resto druid spells scales with mastery stacks.
];
