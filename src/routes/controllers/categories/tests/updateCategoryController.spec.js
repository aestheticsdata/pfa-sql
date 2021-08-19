const prisma = require('../../../../db/dbInit');
const updateCategoryController = require('../updateCategoryController');

jest.mock('prisma');

describe('updateCategoryController', () => {
  const req = {
    body: {
      ID: '123',
      name: 'alimentation',
      color: '#fff',
      userID: '1',
    }
  }

  const categories = [
    {
      ID: '123',
      name: 'alimentation',
      color: '#fff',
      userID: '1',
    },
    {
      ID: '444',
      name: 'foo',
      color: '#ccc',
      userID: '1',
    }
  ];

  const updatedObject = {
    where: { ID: '123' },
    data: {
      name: 'alimentation',
      color: '#fff',
    },
  }

  const res = {
    json: jest.fn(categories => { console.log('res: ', categories) }),
    status: _code => ({ json: err => err }),
  };

  const categoryError = new Error('category update error');

  it('should update the category and return some categories', async () => {
    prisma.categories = {
      update: jest.fn(() => true),
      findMany: () => categories,
    }
    await updateCategoryController(req, res);

    expect(prisma.categories.update).toHaveBeenCalledWith(updatedObject);
    expect(res.json).toHaveBeenCalledWith(categories);
  });

  it('should return an error', async () => {
    prisma.categories = {
      update: () => {throw categoryError},
      findMany: () => categories,
    }
    const result = await updateCategoryController(req, res);
    expect(result).toEqual(categoryError);
  });
});

