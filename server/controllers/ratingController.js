const Rating = require('../models/ratingModel');
const Food = require('../models/foodModel');

exports.createRating = async (req, res) => {
  try {
    const { foodId, rating } = req.body;
    const userId = req.user._id;

    const newRating = await Rating.create({
      foodId,
      userId,
      rating
    });

    // Actualizar el promedio de calificaciones de la comida
    const ratings = await Rating.find({ foodId });
    const avgRating = ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
    
    await Food.findByIdAndUpdate(foodId, { averageRating: avgRating });

    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};