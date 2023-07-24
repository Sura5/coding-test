function getUniqueTags(data) {
    const allTags = data.reduce((tags, media) => {
      tags.push(...media.tags);
      return tags;
    }, []);
  
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags;
  }
  
  const mediaData = [
    {
      id: 1,
      title: "Stranger Scrims",
      duration: 40,
      tags: ["supernatural", "horror", "drama"],
    },
    {
      id: 2,
      title: "The Scrim of the Dragon",
      duration: 60,
      tags: ["drama", "fantasy"],
    },
    {
      id: 3,
      title: "Scrim Hunters",
      duration: 22,
      tags: ["reality", "home improvement"],
    },
    {
      id: 4,
      title: "This Old Scrim",
      duration: 30,
      tags: ["reality", "home improvement"],
    },
    {
      id: 5,
      title: "What We Do in the Scrim",
      duration: 55,
      tags: ["drama", "comedy", "supernatural"],
    },
    {
      id: 6,
      title: "The Scrimdalorian",
      duration: 58,
      tags: ["fantasy", "sci-fi", "adventure"],
    },
  ];
  
  console.log(getUniqueTags(mediaData));
  /*The function getUniqueTags takes the data 
  array as input and uses the reduce method to create an array allTags containing all the tags.
   Then, it uses a Set to remove the duplicate tags and finally converts the Set back to an array uniqueTags, 
   which contains all the unique tags.*/