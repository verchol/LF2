describe("Game", function () {
  it("should create a new game object", function () {
    var g = new game();
    expect(g.arena.height).toEqual(1024);
  });
});
