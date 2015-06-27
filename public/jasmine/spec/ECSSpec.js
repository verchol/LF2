/*globals _, describe, it, expect, beforeEach*/

describe("Position Component", function () {
  var p;
  beforeEach(function () {
    p = new PositionComponent();
  });
    
  it("should hold default X and Y coordinates", function () {
    expect(p.x).toEqual(0);
    expect(p.y).toEqual(0);
  });
});

describe("Movement System", function () {
  var entity = {};
  var ms;
  
  beforeEach(function () {
    entity.components = [
      new PositionComponent(),
      new MovementComponent()
    ];
    entity.getComponent = function (component_name) {
      return _.find(this.components, {name: component_name});
    };
    ms = new MovementSystem();
  });
  
  it("moveEntity - should move the entity in the given direction by increasing the X and Y of that entity's postion component", function () {
    var c = entity.getComponent('position');
    expect(c.x).toEqual(0);   // before
    ms.moveEntity(entity, "right");
    expect(c.x).toEqual(1);  // after
  });
});

describe("Render Component", function () {
  var r;
  beforeEach(function () {
    r = new RenderComponent();
  });

  it("should hold default color and size", function () {
    expect(r.color).toEqual("#00FFFF");
    expect(r.width).toEqual(20);
    expect(r.height).toEqual(20);
  });
});
