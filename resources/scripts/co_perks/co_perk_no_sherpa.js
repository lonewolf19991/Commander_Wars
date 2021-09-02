var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                      defender, defPosX, defPosY, isDefender, action)
    {
        if (CO_PERK.isActive(co))
        {
            if (typeof map !== 'undefined')
            {
                if (map.onMap(atkPosX, atkPosY))
                {
                    var terrainID = map.getTerrain(atkPosX, atkPosY).getID();
                    var isMountain = (terrainID === "MOUNTAIN") ||
                            (terrainID === "DESERT_ROCK") ||
                            (terrainID === "SNOW_MOUNTAIN");
                    if (isMountain)
                    {
                        return -10;
                    }
                }
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Decreases the attack from mountains by 10%.");
    };
    this.getIcon = function()
    {
        return "no_sherpa";
    };
    this.getName = function()
    {
        return qsTr("No sherpa");
    };
    this.getGroup = function()
    {
        return qsTr("Terrain Debuff");
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_NO_SHERPA = new Constructor();