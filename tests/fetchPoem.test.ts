import { fetchPoem } from '../src/util/fetchPoem';
import { IPoemRepository } from '../src/repository/IPoemRepository';
import { Poem } from '../src/types';

describe('fetchPoem', () => {
    let mockPoemRepo: jest.Mocked<IPoemRepository>;

    beforeEach(() => {
        mockPoemRepo = {
            getPoems: jest.fn()
        };
    });

    it('should return an array of poems on succes', async () => {
        const mockPoems: Poem[] = [
            { id: 1, title: 'Poema 1', text: 'Contenido del poema 1' },
            { id: 2, title: 'Poema 2', text: 'Contenido del poema 2' }
        ];
        mockPoemRepo.getPoems.mockResolvedValue(mockPoems);

        const result = await fetchPoem(mockPoemRepo);

        expect(result).toEqual(mockPoems);
        expect(mockPoemRepo.getPoems).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array on error', async () => {
        mockPoemRepo.getPoems.mockRejectedValue(new Error('Error al obtener poemas'));

        const result = await fetchPoem(mockPoemRepo);

        expect(result).toEqual([]);
        expect(mockPoemRepo.getPoems).toHaveBeenCalledTimes(1);
    });
});