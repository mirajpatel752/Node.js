const connectDB = require("./mongoose");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
connectDB();

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlayList = new Playlist({
      name: "React",
      video: 23,
      author: "a",
      active: true,
    });
    const javaPlayList = new Playlist({
      name: "java",
      video: 23,
      author: "b",
      active: false,
    });
    const nodePlayList = new Playlist({
      name: "node",
      video: 23,
      author: "c",
      active: true,
    });
    const mongoPlayList = new Playlist({
      name: "mongo",
      video: 20,
      author: "d",
      active: true,
    });
    // const result =  await reactPlayList.save();
    const result = await Playlist.insertMany([
      reactPlayList,
      javaPlayList,
      nodePlayList,
      mongoPlayList,
    ]);
    console.log(result, "@");
  } catch (error) {
    console.log(error, "ERR");
  }
};
// createDocument()

const getDocument = async () => {
  // const result = await Playlist.find()
  // const result = await Playlist.find({active:false})
  // const result = await Playlist.find({video:{$gte:50}})
  // const result = await Playlist.find({$or:[{author:"miraj"},{active:false}]})
  // const result = await Playlist.find({$and:[{author:"miraj"},{active:true}]})
  const result = await Playlist.find({ author: "miraj" })
    // .select({name:1})
    .sort({ name: -1 });
  // .select({name:1})
  // .limit(1)
  console.log(result, "$@#");
};
// getDocument()

const updateDocument = async (_id) => {
  try {
    // const  result = await Playlist.updateOne({_id},{
    //   $set : {
    //     name:'BHNADERI'
    //   }
    // })
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "bhanderi",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result, "#");
  } catch (error) {}
};

// updateDocument("65eb5cf75c055f203acc24ce")

const deleteDocument = async (_id) => {
  try {
      const Result = await Playlist.deleteOne({_id})
    
  } catch (error) {
    console.log(error,"error")
    
  }
};

deleteDocument("65eb5a883d66e684d164d9d1");

//delete the document

// Define a route handler to save the playlist
// app.post('/post', async (req, res) => {
//     try {
//         const { name, ctype, videos, author, active } = req.body;
//         const playlist = new Playlist({ name, ctype, videos, author, active });
//         await playlist.save();
//         res.status(201).json({ message: 'Playlist created successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
