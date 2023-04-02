const connection = require('./config/mongoConnection');
const mongoCollections = require('./config/mongoCollections');
const presidents = mongoCollections.presidents;


const main = async () => {
    const db = await connection.dbConnection();
try{
  db.dropDatabase()
    const presidentCollection = await presidents();
    const docs = [
        {
          order: 1,
          name: "George Washington",
          description:
            "George Washington was an American soldier, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797.",
          wikipedia: "https://wikipedia.org/wiki/George_Washington",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/440px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
          term: {
            startYear: 1789,
            endYear: 1797,
            served: 2,
          },
          party: "Federalist",
          life: {
            birthYear: 1732,
            deathYear: 1799,
          },
        },
        {
          order: 2,
          name: "John Adams",
          description:
            "John Adams was an American statesman, attorney, diplomat, writer, and Founding Father who was the second president of the United States, serving from 1797 to 1801.",
          wikipedia: "https://wikipedia.org/wiki/John_Adams",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/440px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg",
          term: {
            startYear: 1797,
            endYear: 1801,
            served: 1,
          },
          party: "Federalist",
          life: {
            birthYear: 1735,
            deathYear: 1826,
          },
        },
        {
          order: 3,
          name: "Thomas Jefferson",
          description:
            "Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809.",
          wikipedia: "https://wikipedia.org/wiki/Thomas_Jefferson",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg/440px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
          term: {
            startYear: 1801,
            endYear: 1809,
            served: 2,
          },
          party: "Democratic-Republican",
          life: {
            birthYear: 1743,
            deathYear: 1826,
          },
        },
        {
          order: 4,
          name: "James Madison",
          description:
            "James Madison Jr. was an American statesman, diplomat, expansionist, philosopher, and Founding Father who served as the 4th president of the United States from 1809 to 1817.",
          wikipedia: "https://wikipedia.org/wiki/James_Madison",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/James_Madison%28cropped%29%28c%29.jpg/440px-James_Madison%28cropped%29%28c%29.jpg",
          term: {
            startYear: 1809,
            endYear: 1817,
            served: 2,
          },
          party: "Democratic-Republican",
          life: {
            birthYear: 1751,
            deathYear: 1836,
          },
        },
        {
          order: 5,
          name: "James Monroe",
          description:
            "James Monroe was an American statesman, lawyer, diplomat and Founding Father who served as the 5th president of the United States from 1817 to 1825.",
          wikipedia: "https://wikipedia.org/wiki/James_Monroe",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/440px-James_Monroe_White_House_portrait_1819.jpg",
          term: {
            startYear: 1817,
            endYear: 1825,
            served: 2,
          },
          party: "Democratic-Republican",
          life: {
            birthYear: 1758,
            deathYear: 1831,
          },
        },
        {
          order: 6,
          name: "John Quincy Adams",
          description:
            "John Quincy Adams was an American statesman, diplomat, lawyer, and diarist, who served as the 6th president of the United States from 1825 to 1829. He previously served as the 8th United States Secretary of State from 1817 to 1825.",
          wikipedia: "https://wikipedia.org/wiki/John_Quincy_Adams",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/JQA_Photo_Crop.jpg/440px-JQA_Photo_Crop.jpg",
          term: {
            startYear: 1825,
            endYear: 1829,
            served: 1,
          },
          party: "Democratic-Republican",
          life: {
            birthYear: 1767,
            deathYear: 1848,
          },
        },
        {
          order: 7,
          name: "Andrew Jackson",
          description:
            "Andrew Jackson was an American lawyer, general, and statesman who served as the seventh president of the United States from 1829 to 1837. Before being elected to the presidency, Jackson gained fame as a general in the United States Army and served in both houses of the U.S. Congress.",
          wikipedia: "https://wikipedia.org/wiki/Andrew_Jackson",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Andrew_jackson_head.jpg/440px-Andrew_jackson_head.jpg",
          term: {
            startYear: 1829,
            endYear: 1837,
            served: 2,
          },
          party: "Democrat",
          life: {
            birthYear: 1767,
            deathYear: 1845,
          },
        },
        {
          order: 8,
          name: "Martin Van Buren",
          description:
            "Martin Van Buren was an American lawyer and statesman who served as the 8th president of the United States from 1837 to 1841. A founder of the Democratic Party, he had previously served as the 9th governor of New York, the 10th United States secretary of state, and the 8th vice president of the United States.",
          wikipedia: "https://wikipedia.org/wiki/Martin_Van_Buren",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Martin_Van_Buren.jpg/440px-Martin_Van_Buren.jpg",
          term: {
            startYear: 1837,
            endYear: 1841,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1782,
            deathYear: 1862,
          },
        },
        {
          order: 9,
          name: "William Henry Harrison",
          description:
            "William Henry Harrison was an American military officer and politician who served as the 9th president of the United States. Harrison died just 31 days after his inauguration in 1841, and had the shortest presidency in U.S. history.",
          wikipedia: "https://wikipedia.org/wiki/William_Henry_Harrison",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/William_Henry_Harrison_by_James_Reid_Lambdin%2C_1835_crop.jpg/440px-William_Henry_Harrison_by_James_Reid_Lambdin%2C_1835_crop.jpg",
          term: {
            startYear: 1841,
            endYear: 1841,
            served: 0.00021232876, //2.12328767% of 4 years
          },
          party: "Whig",
          life: {
            birthYear: 1773,
            deathYear: 1841,
          },
        },
        {
          order: 10,
          name: "John Tyler",
          description:
            "John Tyler was the 10th president of the United States, serving from 1841 to 1845, after briefly holding office as the 10th vice president in 1841. He was elected vice president on the 1840 Whig ticket with President William Henry Harrison, succeeding to the presidency after Harrison's death 31 days after assuming office.",
          wikipedia: "https://wikipedia.org/wiki/John_Tyler",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/John_Tyler_%28cropped_3x4%29.png/440px-John_Tyler_%28cropped_3x4%29.png",
          term: {
            startYear: 1841,
            endYear: 1845,
            served: 1, //pretty much
          },
          party: "Whig",
          life: {
            birthYear: 1790,
            deathYear: 1862,
          },
        },
        {
          order: 11,
          name: "James K. Polk",
          description:
            "James Knox Polk was the 11th president of the United States, serving from 1845 to 1849. He previously was the 13th Speaker of the House of Representatives and ninth governor of Tennessee. A protégé of Andrew Jackson, he was a member of the Democratic Party and an advocate of Jacksonian democracy.",
          wikipedia: "https://wikipedia.org/wiki/James_K._Polk",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Polk_crop.jpg/440px-Polk_crop.jpg",
          term: {
            startYear: 1845,
            endYear: 1849,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1795,
            deathYear: 1849,
          },
        },
        {
          order: 12,
          name: "Zachary Taylor",
          description:
            "Zachary Taylor was an American military leader who served as the 12th president of the United States from 1849 until his death in 1850.",
          wikipedia: "https://wikipedia.org/wiki/Zachary_Taylor",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zachary_Taylor_restored_and_cropped.jpg/440px-Zachary_Taylor_restored_and_cropped.jpg",
          term: {
            startYear: 1849,
            endYear: 1850,
            served: 0.25, //1 out of 4 years
          },
          party: "Whig",
          life: {
            birthYear: 1784,
            deathYear: 1850,
          },
        },
        {
          order: 13,
          name: "Millard Fillmore",
          description:
            "Millard Fillmore was the 13th president of the United States, serving from 1850 to 1853, the last to be a member of the Whig Party while in the White House.",
          wikipedia: "https://wikipedia.org/wiki/Millard_Fillmore",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Millard_Fillmore_Better_Crop.jpg/440px-Millard_Fillmore_Better_Crop.jpg",
          term: {
            startYear: 1850,
            endYear: 1853,
            served: 0.75, //3 out of 4 years
          },
          party: "Whig",
          life: {
            birthYear: 1800,
            deathYear: 1874,
          },
        },
        {
          order: 14,
          name: "Franklin Pierce",
          description:
            "Franklin Pierce served as the 14th president of the United States from 1853 to 1857. He was a northern Democrat who believed that the abolitionist movement was a fundamental threat to the unity of the nation.",
          wikipedia: "https://wikipedia.org/wiki/Franklin_Pierce",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg/440px-Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg",
          term: {
            startYear: 1853,
            endYear: 1857,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1804,
            deathYear: 1869,
          },
        },
        {
          order: 15,
          name: "James Buchanan",
          description:
            "James Buchanan Jr. was an American lawyer and politician who served as the 15th president of the United States from 1857 to 1861. He previously served as secretary of state from 1845 to 1849 and represented Pennsylvania in both houses of the U.S. Congress.",
          wikipedia: "https://wikipedia.org/wiki/James_Buchanan",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/James_Buchanan.jpg/440px-James_Buchanan.jpg",
          term: {
            startYear: 1857,
            endYear: 1861,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1791,
            deathYear: 1868,
          },
        },
        {
          order: 16,
          name: "Abraham Lincoln",
          description:
            "Abraham Lincoln was an American lawyer and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865.",
          wikipedia: "https://wikipedia.org/wiki/Abraham_Lincoln",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
          term: {
            startYear: 1861,
            endYear: 1865,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1809,
            deathYear: 1865,
          },
        },
        {
          order: 17,
          name: "Andrew Johnson",
          description:
            "Andrew Johnson was the 17th president of the United States, serving from 1865 to 1869. He assumed the presidency as he was vice president at the time of the assassination of Abraham Lincoln. Johnson was a Democrat who ran with Lincoln on the National Union ticket, coming to office as the Civil War concluded.",
          wikipedia: "https://wikipedia.org/wiki/Andrew_Johnson",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg/440px-Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg",
          term: {
            startYear: 1865,
            endYear: 1869,
            served: 1,
          },
          party: "National Union",
          life: {
            birthYear: 1808,
            deathYear: 1875,
          },
        },
        {
          order: 18,
          name: "Ulysses S. Grant",
          description:
            "Ulysses S. Grant was an American military officer and politician who served as the 18th president of the United States from 1869 to 1877.",
          wikipedia: "https://wikipedia.org/wiki/Ulysses_S._Grant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ulysses_S._Grant_1870-1880.jpg/440px-Ulysses_S._Grant_1870-1880.jpg",
          term: {
            startYear: 1869,
            endYear: 1877,
            served: 2,
          },
          party: "Republican",
          life: {
            birthYear: 1822,
            deathYear: 1885,
          },
        },
        {
          order: 19,
          name: "Rutherford B. Hayes",
          description:
            "Rutherford Birchard Hayes was an American lawyer and politician who served as the 19th president of the United States from 1877 to 1881, after serving in the U.S. House of Representatives and as governor of Ohio.",
          wikipedia: "https://wikipedia.org/wiki/Rutherford_B._Hayes",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg/440px-President_Rutherford_Hayes_1870_-_1880_Restored.jpg",
          term: {
            startYear: 1877,
            endYear: 1881,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1822,
            deathYear: 1893,
          },
        },
        {
          order: 20,
          name: "James A. Garfield",
          description:
            "James Abram Garfield served as the 20th president of the United States from March 4, 1881, until his assassination five months into his term of office.",
          wikipedia: "https://wikipedia.org/wiki/James_A._Garfield",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg/440px-James_Abram_Garfield%2C_photo_portrait_seated.jpg",
          term: {
            startYear: 1881,
            endYear: 1881,
            served: 0.104166438, //152.083 (approx 5 months) is 10.4166438% of 4 years
          },
          party: "Republican",
          life: {
            birthYear: 1831,
            deathYear: 1881,
          },
        },
        {
          order: 21,
          name: "Chester Arthur",
          description:
            "Chester Alan Arthur was an American lawyer and politician who served as the 21st president of the United States from 1881 to 1885. Previously the 20th vice president, he succeeded to the presidency upon the death of President James A. Garfield in September 1881, two months after Garfield was shot by an assassin.",
          wikipedia: "https://wikipedia.org/wiki/Chester_Arthur",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chester_Alan_Arthur.jpg/440px-Chester_Alan_Arthur.jpg",
          term: {
            startYear: 1881,
            endYear: 1885,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1829,
            deathYear: 1886,
          },
        },
        {
          order: 22,
          name: "Grover Cleveland",
          description:
            "Stephen Grover Cleveland was an American lawyer and politician who served as the 22nd and 24th president of the United States from 1885 to 1889 and from 1893 to 1897. Cleveland is the only president in American history to serve two nonconsecutive terms in office.",
          wikipedia: "https://wikipedia.org/wiki/Grover_Cleveland",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/440px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg",
          term: {
            startYear: 1885,
            endYear: 1889,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1837,
            deathYear: 1908,
          },
        },
        {
          order: 23,
          name: "Benjamin Harrison",
          description:
            "Benjamin Harrison was an American lawyer and politician who served as the 23rd president of the United States from 1889 to 1893. He was a grandson of the ninth president, William Henry Harrison, and a great-grandson of Benjamin Harrison V, a founding father who signed the United States Declaration of Independence.",
          wikipedia: "https://wikipedia.org/wiki/Benjamin_Harrison",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg/440px-Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg",
          term: {
            startYear: 1889,
            endYear: 1893,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1833,
            deathYear: 1901,
          },
        },
        {
          order: 24,
          name: "Grover Cleveland",
          description:
            "Stephen Grover Cleveland was an American lawyer and politician who served as the 22nd and 24th president of the United States from 1885 to 1889 and from 1893 to 1897. Cleveland is the only president in American history to serve two nonconsecutive terms in office.",
          wikipedia: "https://wikipedia.org/wiki/Grover_Cleveland",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/440px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg",
          term: {
            startYear: 1893,
            endYear: 1897,
            served: 2, //Nonconsecutive!
          },
          party: "Democrat",
          life: {
            birthYear: 1837,
            deathYear: 1908,
          },
        },
        {
          order: 25,
          name: "William McKinley",
          description:
            "William McKinley was the 25th president of the United States, serving from 1897 until his assassination in 1901.",
          wikipedia: "https://wikipedia.org/wiki/William_McKinley",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/McKinley_%28cropped%29.jpg/440px-McKinley_%28cropped%29.jpg",
          term: {
            startYear: 1897,
            endYear: 1901,
            served: 1, //pretty much
          },
          party: "Republican",
          life: {
            birthYear: 1843,
            deathYear: 1901,
          },
        },
        {
          order: 26,
          name: "Theodore Roosevelt",
          description:
            "Theodore Roosevelt Jr., often referred to as Teddy or his initials T. R., was an American politician, statesman, conservationist, naturalist, historian, and writer who served as the 26th president of the United States from 1901 to 1909.",
          wikipedia: "https://wikipedia.org/wiki/Theodore_Roosevelt",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg/440px-President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg",
          term: {
            startYear: 1901,
            endYear: 1909,
            served: 2,
          },
          party: "Republican",
          life: {
            birthYear: 1858,
            deathYear: 1919,
          },
        },
        {
          order: 27,
          name: "William Howard Taft",
          description:
            "William Howard Taft was the 27th president of the United States and the tenth chief justice of the United States, the only person to have held both offices.",
          wikipedia: "https://wikipedia.org/wiki/William_Howard_Taft",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/William_Howard_Taft_-_Harris_and_Ewing.jpg/440px-William_Howard_Taft_-_Harris_and_Ewing.jpg",
          term: {
            startYear: 1909,
            endYear: 1913,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1857,
            deathYear: 1930,
          },
        },
        {
          order: 28,
          name: "Woodrow Wilson",
          description:
            "Thomas Woodrow Wilson was an American politician and academic who served as the 28th president of the United States from 1913 to 1921. A member of the Democratic Party, Wilson served as the president of Princeton University and as the governor of New Jersey before winning the 1912 presidential election.",
          wikipedia: "https://wikipedia.org/wiki/Woodrow_Wilson",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919_%28cropped%29.jpg/440px-Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919_%28cropped%29.jpg",
          term: {
            startYear: 1913,
            endYear: 1921,
            served: 2,
          },
          party: "Democrat",
          life: {
            birthYear: 1856,
            deathYear: 1924,
          },
        },
        {
          order: 29,
          name: "Warren G. Harding",
          description:
            "Warren Gamaliel Harding served as the 29th president of the United States from 1921 until his death in 1923. He was a member of the Republican Party and one of the most popular sitting U.S. presidents.",
          wikipedia: "https://wikipedia.org/wiki/Warren_G._Harding",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg/440px-Warren_G_Harding-Harris_%26_Ewing.jpg",
          term: {
            startYear: 1921,
            endYear: 1923,
            served: 0.5, //50% of 4 years, approx
          },
          party: "Republican",
          life: {
            birthYear: 1865,
            deathYear: 1923,
          },
        },
        {
          order: 30,
          name: "Calvin Coolidge",
          description:
            "Calvin Coolidge was the 30th president of the United States from 1923 to 1929. A Republican lawyer from New England, born in Vermont, Coolidge worked his way up the ladder of Massachusetts state politics, eventually becoming governor of Massachusetts.",
          wikipedia: "https://wikipedia.org/wiki/Calvin_Coolidge",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg/440px-Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg",
          term: {
            startYear: 1923,
            endYear: 1929,
            served: 1.5, //1 full term + half a term
          },
          party: "Republican",
          life: {
            birthYear: 1872,
            deathYear: 1933,
          },
        },
        {
          order: 31,
          name: "Herbert Hoover",
          description:
            "Herbert Clark Hoover was an American politician and engineer who served as the 31st president of the United States from 1929 to 1933 and a member of the Republican Party, holding office during the onset of the Great Depression.",
          wikipedia: "https://wikipedia.org/wiki/Herbert_Hoover",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/President_Hoover_portrait.jpg/440px-President_Hoover_portrait.jpg",
          term: {
            startYear: 1929,
            endYear: 1933,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1874,
            deathYear: 1964,
          },
        },
        {
          order: 32,
          name: "Franklin D. Roosevelt",
          description:
            "Franklin Delano Roosevelt, often referred to by his initials FDR, was an American politician and attorney who served as the 32nd president of the United States from 1933 until his death in 1945.",
          wikipedia: "https://wikipedia.org/wiki/Franklin_D._Roosevelt",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/440px-FDR_1944_Color_Portrait.jpg",
          term: {
            startYear: 1933,
            endYear: 1945,
            served: 3,
          },
          party: "Democrat",
          life: {
            birthYear: 1882,
            deathYear: 1945,
          },
        },
        {
          order: 33,
          name: "Harry S. Truman",
          description:
            "Harry S. Truman was an American politician who was the 33rd president of the United States from 1945 to 1953. A lifetime member of the Democratic Party, he previously served as a US Senator from the State of Missouri from 1935 to 1945.",
          wikipedia: "https://wikipedia.org/wiki/Harry_S._Truman",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg/440px-TRUMAN_58-766-06_%28cropped%29.jpg",
          term: {
            startYear: 1945,
            endYear: 1953,
            served: 2,
          },
          party: "Democrat",
          life: {
            birthYear: 1884,
            deathYear: 1972,
          },
        },
        {
          order: 34,
          name: "Dwight D. Eisenhower",
          description:
            'Dwight David "Ike" Eisenhower was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he served as Supreme Commander of the Allied Expeditionary Force in Europe, and achieved the rare five-star rank of General of the Army.',
          wikipedia: "https://wikipedia.org/wiki/Dwight_D._Eisenhower",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg/440px-Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg",
          term: {
            startYear: 1953,
            endYear: 1961,
            served: 2,
          },
          party: "Republican",
          life: {
            birthYear: 1890,
            deathYear: 1969,
          },
        },
        {
          order: 35,
          name: "John F. Kennedy",
          description:
            "John Fitzgerald Kennedy, often referred to by his initials JFK, was an American politician who served as the 35th president of the United States from 1961 until his assassination near the end of his third year in office.",
          wikipedia: "https://wikipedia.org/wiki/John_F._Kennedy",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/440px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
          term: {
            startYear: 1961,
            endYear: 1963,
            served: 0.5, //50% of term
          },
          party: "Democrat",
          life: {
            birthYear: 1917,
            deathYear: 1963,
          },
        },
        {
          order: 36,
          name: "Lyndon B. Johnson",
          description:
            "Lyndon Baines Johnson, often referred to by his initials LBJ, was an American educator and politician who served as the 36th president of the United States from 1963 to 1969. He had previously served as the 37th vice president from 1961 to 1963 under President John F. Kennedy.",
          wikipedia: "https://wikipedia.org/wiki/Lyndon_B._Johnson",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/37_Lyndon_Johnson_3x4.jpg/440px-37_Lyndon_Johnson_3x4.jpg",
          term: {
            startYear: 1963,
            endYear: 1969,
            served: 1.5, //1 term + half a term
          },
          party: "Democrat",
          life: {
            birthYear: 1908,
            deathYear: 1973,
          },
        },
        {
          order: 37,
          name: "Richard Nixon",
          description:
            "Richard Milhous Nixon was the 37th president of the United States, serving from 1969 to 1974. He was a member of the Republican Party who previously served as a representative and senator from California and was the 36th vice president from 1953 to 1961.",
          wikipedia: "https://wikipedia.org/wiki/Richard_Nixon",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg/440px-Richard_Nixon_presidential_portrait_%281%29.jpg",
          term: {
            startYear: 1969,
            endYear: 1974,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1913,
            deathYear: 1994,
          },
        },
        {
          order: 38,
          name: "Gerald Ford",
          description:
            "Gerald Rudolph Ford Jr. was an American politician who served as the 38th president of the United States from 1974 to 1977. Earlier, he served as the leader of the Republican Party in the House of Representatives, and then as the 40th vice president of the United States from 1973 to 1974.",
          wikipedia: "https://wikipedia.org/wiki/Gerald_Ford",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gerald_Ford_presidential_portrait_%28cropped%29.jpg/440px-Gerald_Ford_presidential_portrait_%28cropped%29.jpg",
          term: {
            startYear: 1974,
            endYear: 1977,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1913,
            deathYear: 2006,
          },
        },
        {
          order: 39,
          name: "Jimmy Carter",
          description:
            "James Earl Carter Jr. is an American former politician who served as the 39th president of the United States from 1977 to 1981. A member of the Democratic Party, he previously served as the 76th governor of Georgia from 1971 to 1975 and as a Georgia state senator from 1963 to 1967.",
          wikipedia: "https://wikipedia.org/wiki/Jimmy_Carter",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/JimmyCarterPortrait2.jpg/440px-JimmyCarterPortrait2.jpg",
          term: {
            startYear: 1977,
            endYear: 1981,
            served: 1,
          },
          party: "Democrat",
          life: {
            birthYear: 1924,
            deathYear: null,
          },
        },
        {
          order: 40,
          name: "Ronald Reagan",
          description:
            "Ronald Wilson Reagan was an American politician who served as the 40th president of the United States from 1981 to 1989. A member of the Republican Party, he previously served as the 33rd governor of California from 1967 to 1975 after a career as a Hollywood actor and union leader.",
          wikipedia: "https://wikipedia.org/wiki/Ronald_Reagan",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/440px-Official_Portrait_of_President_Reagan_1981.jpg",
          term: {
            startYear: 1981,
            endYear: 1989,
            served: 2,
          },
          party: "Republican",
          life: {
            birthYear: 1911,
            deathYear: 2004,
          },
        },
        {
          order: 41,
          name: "George Bush",
          description:
            "George Walker Bush is an American politician and businessman who served as the 43rd president of the United States from 2001 to 2009. A member of the Bush family and Republican Party, he previously served as the 46th governor of Texas from 1995 to 2000.",
          wikipedia: "https://wikipedia.org/wiki/George_W._Bush",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/440px-George-W-Bush.jpeg",
          term: {
            startYear: 1989,
            endYear: 1993,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1924,
            deathYear: 2018,
          },
        },
        {
          order: 42,
          name: "Bill Clinton",
          description:
            "William Jefferson Clinton is an American politician and attorney who served as the 42nd president of the United States from 1993 to 2001. He previously served as governor of Arkansas from 1979 to 1981 and again from 1983 to 1992, and as attorney general of Arkansas from 1977 to 1979.",
          wikipedia: "https://wikipedia.org/wiki/Bill_Clinton",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/440px-Bill_Clinton.jpg",
          term: {
            startYear: 1993,
            endYear: 2001,
            served: 2,
          },
          party: "Democrat",
          life: {
            birthYear: 1946,
            deathYear: null,
          },
        },
        {
          order: 43,
          name: "George W. Bush",
          description:
            "George Walker Bush is an American politician and businessman who served as the 43rd president of the United States from 2001 to 2009. A member of the Bush family and Republican Party, he previously served as the 46th governor of Texas from 1995 to 2000.",
          wikipedia: "https://wikipedia.org/wiki/George_W._Bush",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/440px-George-W-Bush.jpeg",
          term: {
            startYear: 2001,
            endYear: 2009,
            served: 2,
          },
          party: "Republican",
          life: {
            birthYear: 1946,
            deathYear: null,
          },
        },
        {
          order: 44,
          name: "Barack Obama",
          description:
            "Barack Hussein Obama II is an American politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.",
          wikipedia: "https://wikipedia.org/wiki/Barack_Obama",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg",
          term: {
            startYear: 2009,
            endYear: 2017,
            served: 2,
          },
          party: "Democrat",
          life: {
            birthYear: 1961,
            deathYear: null,
          },
        },
        {
          order: 45,
          name: "Donald Trump",
          description:
            "Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.",
          wikipedia: "https://wikipedia.org/wiki/Donald_Trump",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg",
          term: {
            startYear: 2017,
            endYear: 2021,
            served: 1,
          },
          party: "Republican",
          life: {
            birthYear: 1946,
            deathYear: null,
          },
        },
        {
          order: 46,
          name: "Joe Biden",
          description:
            "Joseph Robinette Biden Jr. is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009.",
          wikipedia: "https://wikipedia.org/wiki/Joe_Biden",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg",
          term: {
            startYear: 2021,
            endYear: null,
            served: null,
          },
          party: "Democrat",
          life: {
            birthYear: 1942,
            deathYear: null,
          },
        },
      ];

      const options = { ordered: true };
    const result = await presidentCollection.insertMany(docs);
    console.log('presidents added');
}
finally{
    connection.closeConnection();
}
}
main()