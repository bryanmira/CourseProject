For demo refer to demo.mp4
For documentation refer to documentation.pdf

To run the app locally:

	Database:
		Download and install mongodb locally 
		then download the dataset https://www.kaggle.com/datasets/jrobischon/wikipedia-movie-plots?resource=download
		Create a moviesdb database in mongo
		then
		mongoimport --db moviesdb --collection movies --type csv --headerline --ignoreBlanks --file [file path of csv dataset]

	API:
		Run `npm install` in root

	Frontend:
		Run `npm install` in frontend folder

	To start the app:
		Run `npm run dev` in root

# CourseProject

Please fork this repository and paste the github link of your fork on Microsoft CMT. Detailed instructions are on Coursera under Week 1: Course Project Overview/Week 9 Activities.
