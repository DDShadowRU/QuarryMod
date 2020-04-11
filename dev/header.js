/*
     ______     __  __     ______     ______     ______     __  __     __    __     ______     _____
    /\  __ \   /\ \/\ \   /\  __ \   /\  == \   /\  == \   /\ \_\ \   /\ "-./  \   /\  __ \   /\  __-.
    \ \ \/\_\  \ \ \_\ \  \ \  __ \  \ \  __<   \ \  __<   \ \____ \  \ \ \-./\ \  \ \ \/\ \  \ \ \/\ \
     \ \___\_\  \ \_____\  \ \_\ \_\  \ \_\ \_\  \ \_\ \_\  \/\_____\  \ \_\ \ \_\  \ \_____\  \ \____-
      \/___/_/   \/_____/   \/_/\/_/   \/_/ /_/   \/_/ /_/   \/_____/   \/_/  \/_/   \/_____/   \/____/

      QuarryMod by Dmitriy Medvedev for ModChallenge3
 */

IMPORT("EnergyNet");
IMPORT("ChargeItem");
const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

const directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
];

const ENERGY_PER_SCAN = 200;
const ENERGY_PER_DESTROY = 80;

