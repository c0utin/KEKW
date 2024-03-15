const ClassSchedule = require('../models/ClassSchedule.js');

// Get all class schedules
const getAllClassSchedules = async (req, res) => {
  try {
    const classSchedules = await ClassSchedule.findAll();
    res.json(classSchedules);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class schedules.' });
  }
};

// Get class schedule by ID
const getClassScheduleById = async (req, res) => {
  const { id } = req.params;

  try {
    const classSchedule = await ClassSchedule.findByPk(id);
    if (classSchedule) {
      res.json(classSchedule);
    } else {
      res.status(404).json({ error: 'Class schedule not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class schedule.' });
  }
};

// Create a new class schedule
const createClassSchedule = async (req, res) => {
  const { class_id, day_of_week, start_time, end_time, status, frequency } = req.body;

  try {
    const newClassSchedule = await ClassSchedule.create({
      class_id,
      day_of_week,
      start_time,
      end_time,
      status,
      frequency,
    });

    res.status(201).json(newClassSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Error creating class schedule.' });
  }
};

// Update class schedule by ID
const updateClassSchedule = async (req, res) => {
  const { id } = req.params;
  const { class_id, day_of_week, start_time, end_time, status, frequency } = req.body;

  try {
    const classSchedule = await ClassSchedule.findByPk(id);
    if (classSchedule) {
      await classSchedule.update({
        class_id,
        day_of_week,
        start_time,
        end_time,
        status,
        frequency,
      });

      res.json(classSchedule);
    } else {
      res.status(404).json({ error: 'Class schedule not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating class schedule.' });
  }
};

// Delete class schedule by ID
const deleteClassSchedule = async (req, res) => {
  const { id } = req.params;

  try {
    const classSchedule = await ClassSchedule.findByPk(id);
    if (classSchedule) {
      await classSchedule.destroy();
      res.json({ message: 'Class schedule deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Class schedule not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting class schedule.' });
  }
};

module.exports = {
  getAllClassSchedules,
  getClassScheduleById,
  createClassSchedule,
  updateClassSchedule,
  deleteClassSchedule,
};
