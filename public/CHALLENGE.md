# Saatchi Art Code Challenge

### Our current App looks like this:

![Screen Shot 2020-02-03 at 1 58 10 PM](https://user-images.githubusercontent.com/643526/73705825-c95eb300-46ab-11ea-9f53-a8aaa2080b13.jpg)

### And we are hoping you can make it to look like this:

![SampleApp](https://user-images.githubusercontent.com/643526/73705331-7e906b80-46aa-11ea-9fa7-e98f37b6319b.gif)

### In order to do this, we need to complete several tasks:

1. Retrieve artwork data from an [API endpoint](http://localhost:3000/api/data)

2. Dispatch/Reduce that data into the Redux Store

3. Display Artworks in `ArtworkList.js`, instructions in File

4. Hook up the search box so it filters the artworks displayed by attribute `artworkTitle` on keyup. This should be done in the redux way:

   - create an action to `dispatch`

   - `dispatch` that action `onChange` in the search box

   - Add a `case` to reduce the global state based on the fired action

   - ensure the `ArtworksList` receive the filtered `Artwork` data to render components

5. Add some `flexbox` OR `grid` styling to display the filtered artworks in a MAX of grid 4 across

6. **Bonus**: Add in favoriting Artwork into the store, tie it into local storage to retrieve favorites on refresh of the page

### As you go, save commits however you think is appropriate for a task. When you're done, please put it on your GITHUB account and send back the url.
