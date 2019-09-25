const picksources = require('./app.js');
const news_sources = {
    1: "al-jazeera-english",
    2: "bbc-news",
    3: "cnn",
    4: "abc-news"

};

test('user should get a news source corresponding to the number entered', () => {
    expect(news_sources[1]).toBe("al-jazeera-english");
    expect(news_sources[2]).toBe("bbc-news");
    expect(news_sources[3]).toBe("cnn");
    expect(news_sources[4]).toBe("abc-news");

});
test("user must type the news source, shoulnot leave it null", () => {
    expect(news_sources[1]).not.toBeNull();
    expect(news_sources[2]).not.toBeNull();
});
test("user enters only sources 1,2,3 and 4", () => {
    expect(news_sources[5]).toBeFalsy();
});

// test('correct input', () => {
//   expect()

//});