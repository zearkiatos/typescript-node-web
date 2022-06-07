

describe("Test suite for index", () => {
  let logSpyOn: any;
  beforeAll(() => {
    logSpyOn = jest.spyOn(console, "log");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should execute console log", () => {
      expect(logSpyOn).toHaveBeenCalled();
  });
});
