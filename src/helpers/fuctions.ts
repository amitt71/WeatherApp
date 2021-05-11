
export  const isFavorite = (favoritesIds: number[], id:number)  : boolean =>  {
    return favoritesIds.includes(id);
}

export const capitalLetter = (word:string) => { 
    word = word.toLowerCase();
     const wordcapitalLetter  = word.charAt(0).toUpperCase() + word.slice(1);
     return wordcapitalLetter;
}