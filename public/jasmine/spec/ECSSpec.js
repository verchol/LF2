/*globals _, describe, it, expect, beforeEach*/

describe("ECS", function () {
  it("should create an ECS object", function () {
  });
});

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

describe("Position System", function () {
  var ps,
    p;
  
  beforeEach(function () {
    ps = new PositionSystem();
    p = new PositionComponent();
  });
  
  it("moveRight - should move right by increasing position component's X", function () {
    expect(p.x).toEqual(0);   // before
    ps.moveRight(p);
    expect(p.x).toEqual(1);  // after
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
