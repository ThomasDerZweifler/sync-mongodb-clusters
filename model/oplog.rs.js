var mongoose = require('mongoose2'),  
    Schema = mongoose.Schema,  
    ObjectId = Schema.ObjectId;  
var OplogSchema = new mongoose.Schema({
	ts : {type : Number},
	h : {type : Number},
	op : {type : String},
	ns : {type : String},
	o : {type : Schema.Types.Mixed},
	o2 : {type : Schema.Types.Mixed}
});
var modelName = "oplog.rs",
        collName = "oplog.rs";
//mongoose.model(modelName,OplogSchema,collName);
//var Model = mongoose.model(modelName,collName);
//exports.dao = Model;
// ������������¶�������Ľ������ã�����require����
//exports.mongouris = "";
exports.schema = OplogSchema;
exports.modelName = modelName;
exports.collName = collName;
exports.mongoose = mongoose;