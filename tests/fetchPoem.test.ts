import { fetchPoem } from '../src/util/fetchPoem.ts';
import { MockPoemRepository } from '../src/repository/poemRepository.ts';
import json from '../src/mockData/data.json';


jest.mock("../src/repository/poemRepository", () => {
  return {
    MockPoemRepository: jest.fn().mockImplementation(() => {
      return {
        getPoems: jest.fn().mockResolvedValue([{ "poem1": "Line1|Line2|Line3", "poem2": "Line4|Line5|Line6" }]),
      };
    }),
  };
});

describe('fetchPoem', () => {
  it('should fetch poems and split them correctly', async () => {
    const setPoemCallBack = jest.fn();
    const poemRepo = new MockPoemRepository(json);
    await fetchPoem(setPoemCallBack, poemRepo);
    expect(setPoemCallBack).toHaveBeenCalledWith([{ "poem1": "Line1|Line2|Line3", "poem2": "Line4|Line5|Line6" }]);
  });

});