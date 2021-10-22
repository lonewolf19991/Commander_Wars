var Constructor = function()
{
    this.init = function (building)
    {
        building.setHp(100);
        building.setAlwaysVisble(true);
    };
    // called for loading the main sprite
    this.loadSprites = function(building)
    {
        building.loadSprite("weld+E+W", false);
        building.loadSpriteV2("weld+E+W+mask", GameEnums.Recoloring_Matrix);
    };
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.getName = function()
    {
        return qsTr("Weld");
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_weld";
    };
    this.onDestroyed = function(terrain)
    {
        // called when the terrain is destroyed and replacing of this terrain starts
        var x = terrain.getX();
        var y = terrain.getY();
        map.replaceTerrainOnly("DESTROYEDWELD", x, y);
        map.getTerrain(x, y).loadSprites();
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+land", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.addScreenshake(30, 0.95, 1000, 200);
        animation.setSound("pipe_destroyed.wav");
    };
    this.getDescription = function()
    {
        return qsTr("Black Hole Pipeline Weld can be destroyed to cross the pipeline.");
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_pipeline";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        var id = TERRAIN.getTerrainAnimationId(terrain);
        return TERRAIN.getTerrainBackgroundId(id, "", true);
    };
}

Constructor.prototype = BUILDING;
var ZWELD_E_W = new Constructor();