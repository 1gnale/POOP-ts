import prototype from "../components/prototype/prototype.json"

export class MockPoemRepository {
  async getPoems() {
    return prototype
  }
}