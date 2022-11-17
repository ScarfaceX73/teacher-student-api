const { ObjectId } = require("mongodb");
const mongo = require("../connect");

module.exports.newCustomer = async (req, res) => {
    try {
        const teacherDetails = {
            isWorking: true,
            ...(req?.body ?? {}),
        };
        console.log(teacherDetails);
        await mongo.selectedDb.collection("teacher").insertOne(customerDetails);
        res.status(200).send({ message: "New customer added" });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.fetchTeacher = async (req, res, next) => {
    try {
        const teacherData = await mongo.selectedDb
            .collection("teacher")
            .find({ isWorking: true })
            .toArray();
        res.send(teacherData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.isWorking = async (req, res, next) => {
    try {
        const updatedData = await mongo.selectedDb
            .collection("teacher")
            .findOneAndUpdate(
                { _id: ObjectId(req.params.customerId) },
                { $set: { ...req.body } },
                { returnOriginal: true }
            );
        res.send(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};