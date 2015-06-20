describe("ECS", function () {
  it("should create an ECS object", function () {
  });
});

describe("Position Components", function () {
  var p;
  beforeEach(function () {
    p = new PositionComponent();
  });
  
  it("should insert itself into the ECS object via setUpPositionComponent", function () {
    expect(typeof ecs.components.position).toBe("object");
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
