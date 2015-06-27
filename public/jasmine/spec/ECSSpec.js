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
