const express = require('express');

const blanRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
} = require('../controllers/Blan.controllers');

blanRoutes.get('/', getAllController);
blanRoutes.delete('/', deletAllController);
blanRoutes.post('/add', addController);
blanRoutes.get('/:_id', getOneController);
blanRoutes.delete('/:_id', deleteOneController);
blanRoutes.put('/:_id', updateOneController);

module.exports = blanRoutes;
