var Constructor = function()
{
    
    this.loadSprites = function(building, neutral, map)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("amphibiousfactory", false);
            building.loadSpriteV2("amphibiousfactory+mask", GameEnums.Recoloring_Matrix);
        }
        else
        {
            // neutral player
            building.loadSprite("amphibiousfactory+neutral", false);
        }
    };
    this.getName = function()
    {
        return qsTr("Amphibious factory");
    };

    this.actionList = ["ACTION_BUILD_UNITS"];
    this.constructionList = ["HOVERCRAFT", "ARTILLERYCRAFT", "HOVERFLAK", "HEAVY_HOVERCRAFT"];
    this.getConstructionList = function(building)
    {
        return AMPHIBIOUSFACTORY.constructionList;
    };
    this.getTerrainAnimationForeground = function(unit, terrain, defender, map)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain, defender, map)
    {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        if (weatherModifier === "")
        {
            weatherModifier = TERRAIN.getTerrainWeatherModifier(terrain);
        }
        return "back_" + weatherModifier + "harbour";
    };

    this.getDescription = function()
    {
        return qsTr("<r>Once captured can be used for </r><div c='#00ff00'>production and resupplying </div><r>of </r><div c='#00ff00'>hovercraft </div><r>units.</r>");
    };

    this.getVisionHide = function(building)
    {
        return true;
    };

    this.getRepairTypes = function(building)
    {
        return [GameEnums.UnitType_Hovercraft, GameEnums.UnitType_Naval];
    };
    this.baseTerrain = ["LAKE", "SEA", "PLAINS", "SNOW", "WASTE", "DESERT"];
    this.getBaseTerrain = function(building)
    {
        return AMPHIBIOUSFACTORY.baseTerrain;
    };
}

Constructor.prototype = BUILDING;
var AMPHIBIOUSFACTORY = new Constructor();
