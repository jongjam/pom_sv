
const express = require('express');
const app = express();
const port = process.env.PORT || 5173;
const cors = require('cors');
const path = require('path');
app.use(cors());