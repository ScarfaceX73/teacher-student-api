const { ObjectId } = require("mongodb");
const mongo = require("../connect");

module.exports.newStudent = async (req, res) => {
    try {
        const newStudent = {
            isEnrolled: true,
            ...(req?.body ?? {}),
        };
        console.log(newStudent);
        await mongo.selectedDb.collection("tea").insertOne(newStudent);
        res.status(200).send({ message: "New student added" });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.fetchStudent = async (req, res, next) => {
    try {
        const studentData = await mongo.selectedDb
            .collection("student")
            .find({ isEnrolled: true })
            .toArray();
        res.send(studentData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.whomToAssign = async (req, res, next) => {
    try {
        const updatedData = await mongo.selectedDb
            .collection("student")
            .findOneAndUpdate(
                { _id: ObjectId(req.params.studentId) },
                { $set: { ...req.body } },
                { returnOriginal: true }
            );
        res.send(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};