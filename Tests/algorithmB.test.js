import pickOneWord from "../algorithmB";

const FIRST_TEST_WORD_LIST = ["hej", "hallå", "miljözon", "tzatziki", "krigszon","sommarstuga"];
const SECOND_TEST_WORD_LIST = ["hej", "hallå", "miljözon", "tzatziki", "pizzeria","sommarstuga"];
const THIRD_TEST_WORD_LIST = ["hej", "hallå", "bazooka", "jacuzzi", "jazzlåt","sommarstuga"];
const FOURTH_TEST_WORD_LIST = ["hej", "hallå", "lastzon", "kustzon", "riskzon","sommarstuga"];
let wordLength, moreThanOnce;

describe("pickOneWord() - various inputs", () => {
  /*
  Här testar jag ifall man får tillbaka ett, 8 tecken långt, random ord. Finns bara tre ord i listan som är 8 tecken. Två ord med unika bokstäver, och ett ord med upprepande bokstäver. 
  Här testar jag så att det inte är ordet med upprepade bokstäver som retureras.
  */  
  test("It should return a random 8 character word that doesnt have any repeating characters ", () => {
    wordLength = 8;
    moreThanOnce = false;
    const result = pickOneWord(FIRST_TEST_WORD_LIST, wordLength, moreThanOnce);
    expect(result).not.toEqual("tzatziki");
  });

  /*
  Här testar jag ifall man får tillbaka ett, 8 tecken långt, random ord. Finns bara tre ord i listan som är 8 tecken. Två ord med upprepande bokstäver, och ett med unika bokstäver. 
  Här testar jag så att det inte är ordet med unika bokstäver som retureras.
  */
  test("It should return a random 8 character word that has repeating characters ", () => {
    wordLength = 8;
    moreThanOnce = true;
    const result = pickOneWord(SECOND_TEST_WORD_LIST, wordLength, moreThanOnce);
    expect(result).not.toEqual("miljözon");
  });

  /*
  Här testar jag när ett ord med 7 tecken, där tecken inte får upprepas, inte finns med i listan
  */
  test("When there is no 7 character word with all unique characters", () => {
    wordLength = 7;
    moreThanOnce = false;
    const result = pickOneWord(THIRD_TEST_WORD_LIST, wordLength, moreThanOnce);
    expect(result).toEqual("Finns inget ord med detta kriterium.");
  })

  /*
  Här testar jag när ett ord med 7 tecken, där tecken får upprepas, inte finns med i listan
  */
  test("When there is no 7 character word with repeating characters", () => {
    wordLength = 7;
    moreThanOnce = true;
    const result = pickOneWord(FOURTH_TEST_WORD_LIST, wordLength, moreThanOnce);
    expect(result).toEqual("Finns inget ord med detta kriterium.");
  })

  /*
  Här testar jag ifall man matar in ett längre ord än vad det finns i listan (kanske inte så nödvändigt för spelet, menmen.)
  */
  test("When there is no word in the list with this (13) many characters", () => {
    wordLength = 13;
    moreThanOnce = true;
    const result = pickOneWord(FOURTH_TEST_WORD_LIST, wordLength, moreThanOnce);
    expect(result).toEqual("Välj ett ord med mindre tecken.");
  });
});