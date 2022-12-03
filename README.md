# Project introduction

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

After starting the project, on the project page, there are 2 buttons, namely preview picture and download picture. As the name suggests, click them to preview the appearance of the download picture and download it.

## Project Description

There are csv files in the src/data directory.

If you need to replace the csv file to generate the report picture.

You just need to add a new csv file in the src/data directory and modify the reference in the src/components/customTable/CustomTable.jsx file(probably on line 6 of the file).

## Technical explanation

It  mainly parses the csv file through papaparse, renders it to the page through the antd component library,and generates a snapshot of the rendered dom with html2canvas and canvas2image.