const chapterMetadata = {
    title: "2. Residential Status and Scope of Total Income",
    info: "Determination of Residencial Status and scope of income based on residential status"
};

const qaList = [
    {
        question: "1. What are the two basic conditions laid down under section 6(1) for determining whether an individual is a resident in India?",
        answer: `
            Under section 6(1) of the Income-tax Act, an individual is considered a resident in India during any previous year if they satisfy <strong>any one</strong> of the following two basic conditions: <br> <br>

            1.  <strong>The 182-day rule:</strong> The individual has been in India during the previous year for a total period of <strong>182 days or more</strong>.<br> <br>
            2.  <strong>The 60-day and 365-day rule:</strong> The individual has been in India for at least <strong>60 days</strong> in the relevant previous year, <strong>AND</strong> has been in India for a total period of <strong>365 days or more</strong> during the 4 years immediately preceding that previous year.<br> <br>

            If an individual satisfies either of these conditions, they are classified as a resident. If they fail to meet both conditions, they are treated as a non-resident. <br> <br>

            <strong>Example:</strong><br>
            Consider Mr. Clark, a UK citizen who frequently visits India for business. Let us determine his residential status for the previous year (P.Y.) 2025-26 under different scenarios:<br> <br>

            <strong>Scenario A (Satisfies Condition 1):</strong> Mr. Clark stays in India from May 1, 2025, to November 15, 2025, totaling 199 days during the P.Y. 2025-26. Because his stay exceeds 182 days, he satisfies the first basic condition and is classified as a <strong>resident</strong> in India. <br> <br>
            <strong>Scenario B (Satisfies Condition 2):</strong> Mr. Clark stays in India for only 75 days during the P.Y. 2025-26. This fails the first condition. However, during the four preceding years (P.Y. 2021-22 to P.Y. 2024-25), he visited India for 100 days each year, making his total stay 400 days over those four years. Because his stay in the current year is more than 60 days (75 days) and his stay in the preceding four years is more than 365 days (400 days), he satisfies the second condition. He is classified as a <strong>resident</strong> in India. <br> <br>
            <strong>Scenario C (Fails Both Conditions):</strong> Mr. Clark stays in India for only 40 days during the P.Y. 2025-26. Because 40 days is less than the 182-day threshold of the first condition and also less than the minimum 60-day threshold of the second condition, he fails both basic tests. Regardless of how many days he spent in India in the prior years, he is classified as a <strong>non-resident</strong> for the P.Y. 2025-26. <br> <br>
        `
    },
    {
        question: "2. Does the term 'stay in India' require an individual to be continuously present or reside at a usual place of residence, and how are the days of arrival and departure counted?",
        answer: `
            Based on the provisions of the Income-tax Act, the term "stay in India" does <strong>not</strong> require an individual to be continuously present in the country, nor is it essential that the stay should be at their usual place of residence, business, or employment. A person can visit India multiple times during the year, stay at different places (like hotels or friends' houses), and all those separate days will be aggregated to determine their residential status. <br> <br>

            Furthermore, the "stay in India" also includes time spent in the territorial waters of India (up to 12 nautical miles from the coastline), meaning even staying on a ship or boat moored in these waters counts as being in India.<br><br>

            Regarding the counting of days, <strong>both the date of arrival in India and the date of departure from India are counted as full days of stay in India</strong>.<br><br>

            Here are some examples to illustrate these rules:<br><br>

            <strong>Example 1: Non-continuous stay and lack of a usual residence</strong><br><br> 
            Ms. Emily, a French national, visits India three separate times during the previous year 2025-26. She stays in a hotel in Mumbai for 20 days in May, visits a friend in Goa for 15 days in September, and travels around Kerala for 35 days in December. <br><br> 
            <em>Application:</em> Even though her stay was broken into three different trips (not continuous) and she does not own or rent a usual residence in India, the law simply aggregates her physical presence. Her total stay in India for the year will be counted as 70 days. <br><br>

            <strong>Example 2: Counting of Arrival and Departure dates</strong><br><br>
            Mr. Smith arrives at the New Delhi airport from London at 11:45 PM on August 10th. After completing his business meetings, he departs on a flight back to London at 1:15 AM on August 14th.<br><br>
            <em>Application:</em> Although Mr. Smith was only physically present in India for 15 minutes on August 10th and for 1 hour and 15 minutes on August 14th, both the day of arrival and the day of departure are counted as full days for income-tax purposes. Therefore, his total period of stay for this trip is calculated as 5 days (August 10, 11, 12, 13, and 14).<br><br>
        `
    },
    {
        question: "3. How does a stay in a ship moored in the territorial waters of India affect the calculation of an individual's number of days in India?",
        answer: `
            According to the Income-tax Act, the concept of <strong>"stay in India" includes physical presence within the territorial waters of India</strong>, which extend up to 12 nautical miles into the sea from the Indian coastline. <br><br>

            Consequently, <strong>time spent on a ship or boat that is moored within these territorial waters is fully counted as staying in India</strong>. This period is aggregated along with any days spent on the mainland when calculating an individual's total number of days in the country to determine their residential status.<br><br>

            <strong>Example:</strong><br>
            Suppose Mr. Thomas, a foreign national, sails his private yacht to India for a holiday. He never actually steps foot on the Indian mainland, but he keeps his yacht moored 8 nautical miles off the coast of Goa for 75 days during the previous year 2025-26. <br><br> 

            Because his yacht is moored within the 12-nautical-mile limit, these 75 days are officially counted as his "stay in India". If Mr. Thomas had previously stayed in India for 400 days during the four preceding years, these 75 days spent entirely on the water would be sufficient to classify him as a <strong>resident</strong> of India for the assessment year 2026-27 (since he satisfies the condition of staying 60 days or more in the current year and 365 days or more in the preceding four years).
           
        `
    },
    {
        question: "4. Under what specific circumstances is the basic condition of a \"60 days\" stay substituted with a \"182 days\" stay for an Indian citizen?",
        answer: `
            Under Section 6(1) of the Income-tax Act, the standard basic condition of staying in India for "60 days or more" (coupled with 365 days in the preceding 4 years) is substituted with a requirement of <strong>"182 days or more"</strong> for an Indian citizen under the following specific circumstances:<br><br>

            <strong>1. Leaving for Employment Outside India:</strong> 
            When an Indian citizen leaves India during the relevant previous year for the purpose of employment outside India.<br><br>

            <strong>2. Leaving as a Crew Member of an Indian Ship:</strong> 
            When an Indian citizen leaves India during the relevant previous year as a member of the crew of an Indian ship. <br><br>

            <strong>3. Coming on a Visit to India (with Indian income up to ₹15 lakhs):</strong> 
            When an Indian citizen (or a person of Indian origin) who is residing outside India comes on a visit to India during the previous year, <strong>provided their total income (excluding income from foreign sources) does not exceed ₹15 lakhs</strong>.<br><br>
            (Note: If their Indian income exceeds ₹15 lakhs, the 60-day condition is instead substituted with a 120-day condition).<br><br>

            In these three scenarios, even if the individual stays in India for 60 days or more (but less than 182 days) and has been in India for 365 days or more in the preceding 4 years, they will <strong>not</strong> be treated as a resident. They must cross the 182-day threshold to be classified as a resident.<br><br>

            <strong>Illustrative Examples :</strong><br><br>

            <strong>Example 1: Leaving for Employment</strong><br><br>
            Mr. Sharma is an Indian citizen who has lived his entire life in Mumbai. He receives a lucrative job offer in Singapore and leaves India permanently on August 15, 2025, to join the new company. <br><br>
            <strong>Application:</strong> His total stay in India for the P.Y. 2025-26 is 137 days (April to August 15). Ordinarily, a stay of 137 days combined with his presence in the preceding 4 years would make him a resident under the 60-day rule. However, because he left India specifically for employment outside India, the 60-day condition is substituted with 182 days. Since 137 days is less than 182 days, <strong>Mr. Sharma will be classified as a non-resident</strong> for the A.Y. 2026-27.<br><br>

            <strong>Example 2: Crew Member of an Indian Ship</strong><br><br>
            Mr. Verma, an Indian citizen, is a marine engineer working as a crew member on an Indian ship. For the P.Y. 2025-26, the dates entered in his Continuous Discharge Certificate for joining and signing off from an eligible foreign-bound voyage result in an excluded period of 250 days. His effective physical stay in India for the year is calculated to be 115 days. <br><br>
            <strong>Application:</strong> Although his stay exceeds 60 days and he was in India for over 365 days in the last four years, the 60-day condition is substituted with 182 days because he is an Indian citizen leaving as a crew member of an Indian ship. <strong>Mr. Verma will be classified as a non-resident</strong>.<br><br>

            <strong>Example 3: Visiting Indian Citizen (Income below ₹15 Lakhs)</strong><br><br>
            Ms. Iyer, an Indian citizen who settled in the UK five years ago, comes to India on a long family visit. She stays in India for 170 days during the P.Y. 2025-26. Her only Indian income for the year is ₹8,00,000 from interest on fixed deposits. <br><br>
            <strong>Application:</strong> She is an Indian citizen visiting India. 
            <strong>Application:</strong> Because she is an Indian citizen visiting India and her Indian income (₹8 lakhs) does not exceed the ₹15 lakhs threshold, the 60-day rule does not apply to her; she must stay for 182 days to be considered a resident. Since she stayed for only 170 days, <strong>Ms. Iyer will be classified as a non-resident</strong>. <br><br>
            (If her interest income had been ₹18 lakhs, the substitution would have been 120 days, and her 170-day stay would have made her a <strong>resident but not ordinarily resident</strong>).<br><br>
        `
    },
    {
        question: "5. Who qualifies as a \"person of Indian origin\" according to the Income-tax Act?",
        answer: `
            According to the Income-tax Act, an individual qualifies as a <strong>\"person of Indian origin\"</strong> if they themselves, or either of their parents, or either of their grandparents were born in undivided India. <br><br>

            <strong>Example:</strong><br><br>
            If Mr. Smith was born in Canada and his parents were also born in Canada, but his maternal grandmother was born in Dhaka in 1935 (which was part of undivided India before the 1947 partition), Mr. Smith would legally qualify as a person of Indian origin under the Act. Consequently, special provisions regarding the minimum period of stay required to establish residential status in India during a visit would apply to him.<br><br>

        `
    },
    {
        question: "6. If an Indian citizen or a person of Indian origin comes on a visit to India, under what condition is the requirement for their stay modified to \"120 days or more\" instead of 182 days?",
        answer: `
            According to the Income-tax Act, when an Indian citizen or a person of Indian origin who resides outside India comes on a visit to India, the condition for their stay is modified to <strong>"120 days or more"</strong> (instead of 182 days) if their <strong>total income from Indian sources (i.e., total income excluding income from foreign sources) exceeds ₹ 15 lakhs</strong> during the relevant previous year. <br><br>

            Under this modified rule, such an individual will be treated as a resident if they satisfy both of the following conditions together:<br><br>
            1. They have been in India for at least <strong>120 days</strong> during the relevant previous year, <strong>AND</strong><br><br>
            2. They have been in India for a total period of <strong>365 days or more</strong> during the 4 years immediately preceding the previous year.<br><br>

            <strong>Important Note:</strong> If an individual qualifies as a resident by satisfying this specific 120-day criteria, their residential status is automatically assigned as a <strong>"Resident but not ordinarily resident" (RNOR)</strong>. <br><br>

            <strong>Example:</strong><br><br>
            Mr. Patel, a person of Indian origin settled in Canada, visits India for 135 days during the previous year 2025-26. His total stay in India during the preceding four years was 400 days. <br><br>
            <strong>Scenario A (Income &le; ₹15 Lakhs):</strong> Mr. Patel's Indian income (from house property and bank interest) is ₹ 12 lakhs. Since his Indian income does not exceed the ₹ 15 lakhs threshold, the 182-day rule applies. Because his stay of 135 days is less than 182 days, he is classified as a <strong>Non-Resident</strong>.<br><br>
            <strong>Scenario B (Income > ₹15 Lakhs):</strong> Mr. Patel's Indian income is ₹ 18 lakhs. Because his Indian income exceeds ₹ 15 lakhs, the modified 120-day rule applies. Since he stayed for 135 days in the current year (which is &ge; 120 days) and 400 days in the preceding four years (which is &ge; 365 days), he is classified as a <strong>Resident but not ordinarily resident (RNOR)</strong>.<br><br>
        `
    },
    {
        question: "7. How is the period of stay calculated for an Indian citizen who is a crew member of a foreign-bound Indian ship, and what role does the Continuous Discharge Certificate play as per Rule 126?",
        answer: `
            Under the Income-tax Act, calculating the period of stay in India for an Indian citizen who is a crew member of a foreign-bound ship is governed by specific guidelines to remove uncertainties regarding their physical presence during the voyage. <br><br>

            To address this, Rule 126 prescribes that a specific continuous period is entirely <strong>excluded</strong> from the calculation of their total number of days stayed in India. <br><br>

            <strong>The Role of the Continuous Discharge Certificate (CDC)</strong><br><br>

            The Continuous Discharge Certificate acts as the official documentary evidence to determine this excluded period. According to Rule 126, the period to be excluded from the individual's stay in India is calculated as follows:<br><br>
            <ul>
                <li><strong>Start Date:</strong> The exact date entered into the Continuous Discharge Certificate in respect of the individual joining the ship for the eligible voyage.<br><br></li>
                <li><strong>End Date:</strong> The exact date entered into the Continuous Discharge Certificate in respect of the individual signing off from the ship for that voyage.<br><br></li>
            </ul>

            (Note: An "eligible voyage" is defined as a voyage by a ship carrying passengers or freight in international traffic that either originates from a port in India with a destination outside India, or originates from a port outside India with a destination in India).*<br><br>

            <strong>Illustrative Example:</strong><br><br>

            Suppose Mr. Ravi, an Indian citizen, is a crew member on an Indian freight ship. The ship departs from Kochi (India) to Sydney (Australia), qualifying as an eligible voyage. For the previous year 2025-26, his Continuous Discharge Certificate records the following:<br><br>
            <ul>
                <li><strong>Date of joining the ship:</strong> July 5, 2025<br><br></li>
                <li><strong>Date of signing off:</strong> January 15, 2026<br><br></li>
            </ul>

            <strong>Calculation:</strong><br><br>
            The continuous period from July 5, 2025, to January 15, 2026, must be entirely excluded from Mr. Ravi's stay in India. <br><br>

            <ul>
                <li><strong>Days to exclude:</strong><br><br> 27 (July) + 31 (Aug) + 30 (Sep) + 31 (Oct) + 30 (Nov) + 31 (Dec) + 15 (Jan) = 195 days.<br><br></li>
                <li><strong>Effective stay in India:</strong><br><br> 365 total days in the year - 195 excluded days = 170 days. <br><br></li>
            </ul>

            Because Mr. Ravi is an Indian citizen serving as a crew member of an Indian ship, the basic 60-day condition is substituted, and he must stay in India for 182 days or more to be considered a resident. Since his effective calculated stay is only 170 days, he will be classified as a <strong>non-resident</strong> for the Assessment Year 2026-27.<br><br>
        `
    },
    {
        question: "8. What are the conditions under section 6(1A) that make an Indian citizen a 'deemed resident' of India, even if they do not meet the physical stay requirements?",
        answer: `
            Under Section 6(1A) of the Income-tax Act, an individual can be classified as a <strong>"deemed resident"</strong> of India without any requirement for physical stay in the country. To trigger this provision, the individual must satisfy all of the following conditions:<br><br>
            1. <strong>Indian Citizenship:</strong> The person <strong>must be an Indian citizen</strong>. An individual who is merely a Person of Indian Origin (PIO) but not a citizen cannot be considered a deemed resident under this specific section.<br><br>
            2. <strong>Income Threshold:</strong> The individual's <strong>total income, other than income from foreign sources, must exceed ₹15 lakhs</strong> during the relevant previous year. <br><br>
            (Note: "Income from foreign sources" refers to income that accrues or arises outside India and is not deemed to accrue or arise in India. However, if the foreign income is derived from a business controlled in or a profession set up in India, it is not considered a foreign source for this threshold).<br><br>
            3. <strong>Not Liable to Tax Elsewhere:</strong> The individual <strong>must not be liable to tax in any other country or territory</strong> by reason of their domicile, residence, or any other similar criteria. The phrase "liable to tax" means that an income-tax liability exists on such a person under the tax laws of that foreign country for the time being in force, even if they have subsequently been exempted from that liability under those laws.<br><br>
            <strong>Important Rules Regarding Deemed Residents:</strong><br><br>
            <ul>
                <li><strong>Overrides Physical Stay:</strong> The number of days stayed in India is completely irrelevant for being a deemed resident under Section 6(1A).<br><br></li>
                <li><strong>Applicability:</strong> This deeming provision acts as a fallback and <strong>will not apply if the individual is already classified as a resident under the standard physical stay rules</strong> of Section 6(1). <br><br></li>
                <li><strong>Residential Status:</strong> An individual who becomes a deemed resident under Section 6(1A) is <strong>always assigned the default status of a "Resident but not ordinarily resident" (RNOR)</strong>.<br><br></li>
            </ul>
            <strong>Illustrative Example:</strong><br><br>
            Suppose Mr. Verma is an Indian citizen who currently resides in a tax-free country (like the Bahamas) where he is not liable to pay any personal income tax. During the previous year 2025-26, he does not visit India at all (0 days of stay). However, he earns ₹22 lakhs as rent from commercial properties he owns in Mumbai. <br><br>
            <strong>Application:</strong> Even though Mr. Verma's physical stay in India is zero, he satisfies all three conditions: he is an Indian citizen, his Indian income (₹22 lakhs) comfortably exceeds the ₹15 lakhs threshold, and he is not liable to tax in his country of residence. Therefore, he will be classified as a <strong>deemed resident</strong> under Section 6(1A) and will be treated as a <strong>Resident but not ordinarily resident (RNOR)</strong> for tax purposes in India.<br><br>
        `
    },
    {
        question: "9. How does the law define the phrase 'liable to tax' in the context of deemed residency for an Indian citizen?",
        answer: `
            In the context of deemed residency for an Indian citizen, the phrase <strong>"liable to tax"</strong> in relation to a person and a specific country means that <strong>there is an income-tax liability on such person under the tax laws of that country</strong> for the time being in force. <br><br>
            Crucially, the law specifies that this definition <strong>also includes a person who has subsequently been exempted from such tax liability</strong> under the law of that foreign country. <br><br>
            Therefore, for an Indian citizen to be classified as a "deemed resident" under Section 6(1A), they must reside in a country or territory where they are <i>not liable to tax at all</i> (such as a jurisdiction with no personal income tax system) based on their domicile, residence, or similar criteria. If the foreign country's laws generally impose a tax liability on them, but they <strong>do not pay tax because they qualify for a specific exemption</strong> under those laws, they are still legally considered "liable to tax" in that country. Consequently, the deeming provision of Indian residency would not apply to them.<br><br>
            To illustrate how the definition of "liable to tax" affects the deemed residency of an Indian citizen, here are two contrasting examples :- <br><br>
            
            <strong>Example 1: Residing in a completely tax-free jurisdiction (Not Liable to Tax)</strong><br><br>
            Mr. Arjun is an Indian citizen who lives and works in Country X, a nation that does not levy any personal income tax on its residents. Therefore, there is no income-tax liability on him under the laws of Country X. During the previous year, he does not visit India at all, but he earns ₹18 lakhs from commercial properties he rented out in Delhi. 
            <strong>Result:</strong> Because he is completely <i>not liable to tax</i> in his country of residence by reason of his domicile, the deeming provision gets triggered. He satisfies all conditions of Section 6(1A) and will be classified as a <strong>deemed resident</strong> of India. He will automatically be treated as a "Resident but not ordinarily resident" (RNOR).<br><br>

            <strong>Example 2: Enjoying a specific tax exemption (Legally considered "Liable to Tax")</strong><br><br>
            Ms. Priya is an Indian citizen who lives in Country Y. Country Y has a standard personal income tax law, but it offers a special 5-year "tax holiday" (a full exemption from income tax) for individuals who set up new agricultural technology businesses. Priya runs such a business and currently pays absolutely zero income tax in Country Y due to this exemption. Her Indian income (from interest and dividends) for the previous year is ₹25 lakhs.<br><br>
            <strong>Result:</strong> Even though Priya currently pays zero tax, the Income-tax Act explicitly states that the phrase "liable to tax" includes a person who has subsequently been exempted from such liability under the laws of that foreign country. Therefore, Ms. Priya is legally considered <strong>liable to tax</strong> in Country Y. Because she does not meet the "not liable to tax" condition, the deemed resident provision under Section 6(1A) will <strong>not</strong> apply to her. Assuming she has not visited India to trigger the normal physical stay rules, she will remain a <strong>Non-Resident</strong> in India.
        `
    },
    {
        question: "10. Can a person of Indian origin (who is not an Indian citizen) be considered a 'deemed resident' under section 6(1A)?",
        answer: `
            <strong>No, a person of Indian origin who is not an Indian citizen cannot be considered a "deemed resident" under Section 6(1A) of the Income-tax Act</strong>. <br><br>

            The statutory provision for deemed residency is strictly restricted to <strong>Indian citizens</strong>. For this provision to apply, the individual must be an Indian citizen, have a total Indian income (excluding foreign sources) exceeding ₹15 lakhs during the previous year, and not be liable to tax in any other country by reason of their domicile or residence. <br><br>

            Because the law explicitly singles out Indian citizens, the deemed resident rule does not apply to a Person of Indian Origin (PIO) holding foreign citizenship. <br><br>

            <strong>Illustrative Example:</strong><br><br>
            Suppose Mr. Sharma is a Person of Indian Origin (PIO) because his parents were born in undivided India, but he himself was born in and is a citizen of the United Kingdom. He currently lives and works in a Middle Eastern country that levies absolutely no personal income tax. During the previous year, he does not visit India at all, but he earns a massive ₹40 lakhs from a property he rented out in Bengaluru. <br><br>

            <strong>Illustration:</strong> Even though Mr. Sharma is completely not liable to tax in his country of residence and his Indian income far exceeds the ₹15 lakhs threshold, he <strong>will not be classified as a deemed resident</strong> under Section 6(1A) because he is a UK citizen, not an Indian citizen. Since he also fails the physical stay requirements (zero days in India), he will remain a <strong>Non-Resident</strong> for tax purposes in India.
        `
    },
    {
        question: "11. What are the two specific conditions laid down in section 6(6) that make a resident individual a 'Resident but not ordinarily resident' (RNOR)?",
        answer: `
            Under Section 6(6) of the Income-tax Act, a resident individual is classified as a "Resident but not ordinarily resident" (RNOR) if they satisfy <strong>any one</strong> of the following two specific conditions:<br><br>

            <strong>1. The 9 out of 10 years rule:</strong> The individual has been a non-resident in India in any 9 out of the 10 previous years immediately preceding the relevant previous year.<br><br>

            <strong>2. The 729 days rule:</strong> The individual has been in India for a total period of 729 days or less during the 7 previous years immediately preceding the relevant previous year.<br><br>

            If a resident individual meets either of these criteria, they are treated as an RNOR. If they fail to meet both conditions, they are classified as a "Resident and ordinarily resident" (ROR).<br><br>

            (Note: The Act also automatically assigns RNOR status to two other specific categories: Indian citizens or persons of Indian origin visiting India whose Indian income exceeds ₹15 lakhs and who stay between 120 and 181 days, as well as to Indian citizens who qualify as "deemed residents" under section 6(1A)).<br><br>

            <strong>Illustrative Example :</strong><br><br>
            Suppose Mr. Carlos, a foreign national, has been living and working in Spain for the last 15 years. He is transferred to India and arrives on May 1, 2025, staying for the remainder of the previous year (P.Y.) 2025-26.<br><br>

            <strong>Basic Status:</strong> Because his stay during P.Y. 2025-26 exceeds 182 days, he clears the basic test and is classified as a <strong>Resident</strong> in India.<br><br>

            <strong>Applying Section 6(6):</strong> To determine if he is ordinarily resident, we look at his past stay. Since he lived in Spain for the past 15 years, his physical stay in India during the preceding 7 years is 0 days (which is strictly less than the 729-day limit). Furthermore, he was a non-resident for all 10 preceding years. He comfortably satisfies both conditions of Section 6(6), even though fulfilling just one is enough. Therefore, his final residential status for the year will be <strong>Resident but not ordinarily resident (RNOR)</strong>.
        `
    },
    {
        question: "12. What is the default residential status (ROR or RNOR) assigned to an individual who qualifies as a deemed resident under section 6(1A)?",
        answer: `
            An individual who qualifies as a deemed resident under Section 6(1A) of the Income-tax Act is always assigned the default residential status of <strong>Resident but not ordinarily resident (RNOR)</strong>.
        `
    },
    {
        question: "13. What determines the residential status of a Hindu Undivided Family (HUF), and what is meant by \"control and management\" of its affairs?",
        answer: `
            Under the Income-tax Act, the residential status of a Hindu Undivided Family (HUF) depends fundamentally on the geographical location of the "control and management" of its affairs. <br><br>

            <strong>Determining Basic Residential Status (Resident vs. Non-Resident)</strong><br><br>
            <strong>Resident:</strong> A HUF is considered a resident in India if the control and management of its affairs is situated <strong>wholly or partly</strong> in India during the relevant previous year.<br><br>
            <strong>Non-Resident:</strong> A HUF is classified as a non-resident only if the control and management of its affairs is situated <strong>wholly outside India</strong>.<br><br>

            <strong>Meaning of "Control and Management"</strong><br><br>
            The law provides specific guidance on what constitutes "control and management" for a HUF:<br><br>
            <strong>Centralized Decision-Making:</strong> It refers to the central control and management of the HUF's affairs, not the routine carrying on of day-to-day business by agents, servants, or employees.<br><br>
            <strong>Actual Control:</strong> It means having <i>de facto</i> (actual) control and management, rather than merely possessing a theoretical right to control or manage.<br><br>
            <strong>The "Head and Brain":</strong> The control and management is considered to be situated at the place where the "head and brain of the adventure" is located, which is where <strong>important policy decisions</strong> concerning the HUF's affairs are taken. <br><br>
            <strong>Physical Presence of Family is Insufficient:</strong> Just because the family owns a house in India where some members reside does not automatically mean the control and management is in India, unless the crucial decisions are actually being made at that place. <br><br>
            <strong>Degree of Permanence:</strong> The place of control may be completely different from the usual place where the business is run, but it must involve the directing power functioning at a particular place with some degree of permanence.<br><br>

            <strong>Determining Ordinary Residency (ROR vs. RNOR)</strong><br><br>
            Once a HUF is established as a <strong>Resident</strong> (because its control and management is wholly or partly in India), its final status as "Resident and Ordinarily Resident" (ROR) or "Resident but Not Ordinarily Resident" (RNOR) depends entirely on the past physical stay of its <strong>Karta</strong>. <br><br>

            A resident HUF will be treated as <strong>ROR</strong> only if the Karta satisfies <strong>both</strong> of the following additional conditions:<br><br>
            1.  The Karta has been a resident in India in at least <strong>2 out of the 10 previous years</strong> immediately preceding the relevant previous year.<br><br>
            2.  The Karta's physical stay in India during the <strong>7 previous years</strong> immediately preceding the relevant previous year is <strong>730 days or more</strong>.<br><br>

            If the Karta fails to meet even one of these two additional conditions, the resident HUF will be classified as a <strong>Resident but not ordinarily resident (RNOR)</strong>.
        `
    },
    {
        question: "14.  Under what conditions does a resident HUF become \"Resident and ordinarily resident\" (ROR) as opposed to \"Resident but not ordinarily resident\" (RNOR)?",
        answer: `
            A resident Hindu Undivided Family (HUF) becomes a <strong>"Resident and ordinarily resident" (ROR)</strong> if its <strong>Karta</strong> satisfies <strong>both</strong> of the following additional conditions regarding their past physical stay in India:<br><br>

            1. The Karta must have been a resident in India in at least <strong>2 out of the 10 previous years</strong> immediately preceding the relevant previous year.<br><br>
            2. The Karta's total stay in India during the <strong>7 previous years</strong> immediately preceding the relevant previous year must be <strong>730 days or more</strong>.<br><br>

            If the Karta fails to satisfy <i>either one or both</i> of these additional conditions, the resident HUF will instead be classified as a <strong>"Resident but not ordinarily resident" (RNOR)</strong>.<br><br>

            <strong>Example:</strong><br><br>
            Suppose the control and management of the affairs of <strong>a HUF</strong> are situated partly in India, making the HUF a <strong>Resident</strong> for the previous year 2025-26. <br><br>

            To determine if the HUF is ROR or RNOR, we look at the Karta, Mr. Sharma. Mr. Sharma has primarily managed the business from Dubai over the last decade but makes short business trips to India. <br><br>
            <strong>Analysis:</strong> Over the last 10 years, he satisfied the basic physical stay conditions to be a resident in exactly 3 previous years (clearing the first condition of being a resident in at least 2 out of 10 years). However, his aggregate physical stay in India during the 7 years immediately preceding 2025-26 comes out to only 650 days. <br><br>
            <strong>Conclusion:</strong> Because Mr. Sharma's stay of 650 days is strictly less than the required <strong>730 days</strong>, he fails the second additional condition. Consequently, despite being a resident HUF, it will be classified as a <strong>Resident but not ordinarily resident (RNOR)</strong> for the Assessment Year 2026-27.
        `
    },
    {
        question: "15. How is the residential status of a Firm, Association of Persons (AoP), Body of Individuals (BoI), Local Authority, and Artificial Juridical Person determined?",
        answer: `
        Under the provisions of the Income-tax Act, the residential status of a Firm, Association of Persons (AoP), Body of Individuals (BoI), Local Authority, and Artificial Juridical Person is determined by a single, uniform test based on the geographical location of the <strong>"control and management"</strong> of its affairs.<br><br>

        Unlike individuals and Hindu Undivided Families (HUFs), these entities are classified into only two categories: they are either <strong>Resident</strong> or <strong>Non-Resident</strong>. They cannot be "Resident and ordinarily resident" or "Resident but not ordinarily resident".<br><br>

        The determination is made as follows:<br><br>
        <strong>Resident:</strong> The entity is considered a resident in India if the control and management of its affairs is situated <strong>wholly or partly in India</strong> during the relevant previous year.<br><br>
        <strong>Non-Resident:</strong> The entity becomes a non-resident *only* if the control and management of its affairs is situated <strong>wholly outside India</strong>.<br><br>

        <strong>Important Rule for Firms, AoPs, and BoIs:</strong><br><br>
        The law specifically clarifies that the residential status of the individual partners (in a firm) or members (in an AoP/BoI) is completely <strong>immaterial</strong> when determining the residential status of the Firm, AoP, or BoI itself. <br><br>

        <strong>Illustrative Example:</strong><br><br>
        Suppose "Global Traders" is a partnership firm with its primary business operations and head office located in Singapore. The firm has three partners: Mr. A and Mr. B (who live in Singapore) and Mr. C (who lives in Delhi). During the previous year 2025-26, the firm holds its strategic policy meetings online, and Mr. C participates in and influences these crucial decisions from his office in Delhi. <br><br>

        <strong>Application:</strong> Because Mr. C is actively participating in the "control and management" of the firm's affairs from Delhi, the control and management is situated <strong>partly in India</strong>. Therefore, regardless of the fact that the main business is in Singapore and the other two partners are non-residents, "Global Traders" as a firm will be classified as a <strong>Resident</strong> in India for tax purposes.<br><br>

        `
    },
    {
        question: "16.  Is the residential status of the individual partners or members relevant when determining the residential status of a Firm, AoP, or BoI?",
        answer: `
        <strong>No</strong>, the residential status of the individual partners or members is strictly <strong>immaterial</strong> when determining the residential status of a Firm, Association of Persons (AoP), or Body of Individuals (BoI). <br><br>
        The residential status of these entities is determined exclusively by the geographical location of where the <strong>"control and management"</strong> of their affairs takes place. The rules are straightforward:<br><br>
        <strong>Resident:</strong> The Firm, AoP, or BoI is considered a resident in India if the control and management of its affairs is situated <strong>wholly or partly in India</strong> during the relevant previous year.<br><br>
        <strong>Non-Resident:</strong> The entity is considered a non-resident only if the control and management of its affairs is situated <strong>wholly outside India</strong>.<br><br>
        Therefore, even if all the individual partners of a firm are non-residents, the firm itself will still be classified as a resident of India for tax purposes if even a small part of its strategic decision-making (control and management) occurs within India.<br><br>
        `
    },
    {
        question: "17.  What are the criteria for a company to be classified as a resident in India, and how is the \"Place of Effective Management\" (POEM) defined?",
        answer: `
        A company is classified as a resident in India in any previous year if it satisfies <strong>either</strong> of the following two criteria:<br><br>
        
        1. It is an <strong>Indian company</strong>; or<br><br>
        2. Its <strong>Place of Effective Management (POEM)</strong>, in that year, is situated in India.<br><br>

        If a company is neither an Indian company nor has its POEM in India during the relevant year, it is classified as a non-resident.<br><br>

        <strong>Definition of Place of Effective Management (POEM)</strong><br>
        Under the Explanation to section 6(3) of the Income-tax Act, "Place of Effective Management" is defined as the place where <strong>key management and commercial decisions</strong> that are necessary for the conduct of the business of an entity as a whole are, in substance, made.<br><br>
        `
    },
    {
        question: "18.  How does the scope of total taxable income differ for a \"Resident and Ordinarily Resident\" (ROR) compared to a \"Resident but not Ordinarily Resident\" (RNOR)?",
        answer: `
        <p>The scope of total taxable income differs significantly between a <strong>"Resident and Ordinarily Resident" (ROR)</strong> and a <strong>"Resident but not Ordinarily Resident" (RNOR)</strong>, primarily in how foreign income is treated.</p>
        <br>
        <p>Here is the breakdown of the scope of total income for both categories:</p>
        <br>
        <p><strong>Resident and Ordinarily Resident (ROR)</strong><br></p>
        <p>An individual who is an ROR is liable to pay tax on their <strong>global income</strong>. Their total taxable income includes:</p><br>
        <ol>
        <li>Income received or deemed to be received in India during the previous year.</li>
        <li>Income which accrues or arises (or is deemed to accrue or arise) in India during the previous year.</li>
        <li><strong>Income which accrues or arises outside India</strong>, even if it is never received in or brought into India during the previous year.</li>
        </ol><br>
        <p><strong>Resident but not Ordinarily Resident (RNOR)</strong><br></p>
        <p>An individual who is an RNOR is taxed on a narrower scope of income. Their total taxable income includes:</p><br>
        <ol>
        <li>Income received or deemed to be received in India during the previous year.</li>
        <li>Income which accrues or arises (or is deemed to accrue or arise) in India during the previous year.</li>
        <li><strong>Foreign income ONLY IF it is derived from a business controlled in India or a profession set up in India</strong>.</li>
        </ol><br>
        <p>Any other foreign income that accrues or arises outside India and is received outside India is <strong>not</strong> included in the total income of an RNOR.</p><br>
        <br>
        <p><strong>Illustrative Examples</strong></p><br>
        <p>To demonstrate how the scope differs, let us look at three scenarios involving Mr. Gupta, who earned various types of income during the previous year. We will evaluate how each is taxed depending on whether he is classified as an ROR or an RNOR.</p><br>
        <p><strong>Example 1: Purely Foreign Income</strong><br></p>
        <p>Mr. Gupta owns a commercial property in Sydney, UK, and earns a rental income of ₹10,000,000. The rent is deposited directly into his bank account in Sydney.</p><br>
        <ul>
        <li><strong>If Mr. Gupta is ROR:</strong> This income is <strong>fully taxable</strong> in India because an ROR is taxed on global income, regardless of where it accrues or is received.</li>
        <li><strong>If Mr. Gupta is RNOR:</strong> This income is <strong>not taxable</strong> in India. It accrues outside India, is received outside India, and has no connection to a business controlled in India.</li>
        </ul>
        <br>
        <p><strong>Example 2: Foreign Income from an Indian-Controlled Business</strong><br></p>
        <p>Mr. Gupta runs a software consulting firm in Dubai. The profits for the year are ₹5,000,000, which are received in a Dubai bank account. However, all the key strategic and management decisions for this Dubai firm are made from his head office in Bengaluru, India.</p><br>
        <ul>
        <li><strong>If Mr. Gupta is ROR:</strong> The ₹5,000,000 is <strong>taxable</strong> in India as part of his global income.</li>
        <li><strong>If Mr. Gupta is RNOR:</strong> The ₹5,000,000 is <strong>taxable</strong> in India. Even though the income accrues and is received outside India, it is derived from a business that is <strong>controlled in India</strong>, which falls under the specific scope of taxable income for an RNOR.</li>
        </ul>
        <br>
        <p><strong>Example 3: Indian Income Received Abroad</strong><br></p>
        <p>Mr. Gupta sells shares of an Indian domestic company on the Bombay Stock Exchange and makes a short-term capital gain of ₹2,000,000. The proceeds are remitted directly to his bank account in Singapore.</p><br>
        <ul>
        <li><strong>If Mr. Gupta is ROR:</strong> The ₹2,000,000 is <strong>taxable</strong> in India.</li>
        <li><strong>If Mr. Gupta is RNOR:</strong> The ₹2,000,000 is <strong>taxable</strong> in India. Even though the money was received in Singapore, the income accrued in India (because the asset was situated in India). Both RORs and RNORs must pay tax on income that accrues or arises in India.</li>
        </ul>
        `
    },
    {
        question: "19. What categories of income are chargeable to tax in India for a Non-Resident under section 5(2)?",
        answer: `
            Under <strong>Section 5(2)</strong> of the Income-tax Act, the total taxable income of a non-resident is strictly limited to the following two categories: <br><br>

            1.  <strong>Income received or deemed to be received in India</strong> during the relevant previous year. <br><br>
            2.  <strong>Income which accrues or arises, or is deemed to accrue or arise, in India</strong> during the previous year. <br><br>

            Unlike a resident (or a resident but not ordinarily resident), a non-resident is <strong>not chargeable to tax in India on any purely foreign income</strong>. Therefore, any income that accrues or arises entirely outside India and is also received outside India is completely excluded from a non-resident's total taxable income, even if that income is derived from a business controlled in India or a profession set up in India. <br><br>    
        `
    },
    {
        question: "20. What is the tax liability for a non-resident seafarer receiving salary into a Non-Resident External (NRE) bank account for services rendered on a foreign-going ship?",
        answer: `
        According to the clarifications issued by the Central Board of Direct Taxes (CBDT), income by way of salary received by a non-resident seafarer is <strong>not included in their total taxable income in India</strong> if it meets the following specific conditions: <br><br>

        1. The salary is for services rendered outside India on a foreign-going ship (this applies whether the ship flies an Indian flag or a foreign flag).<br><br>
        2. The remuneration is received directly into a Non-Resident External (NRE) bank account maintained with an Indian bank.<br><br>

        Therefore, such salary income is effectively completely exempt from income tax in India for the non-resident seafarer. <br><br>   
        `
    },
    {
        question: "21. Can an item of income that has already been taxed on an accrual basis be taxed again when it is actually received?",
        answer: `
            <strong>No</strong>, an item of income that has already been taxed on an accrual basis cannot be assessed and taxed again when it is actually received. Doing so would amount to double taxation. <br><br>

            To explicitly prevent this, <strong>Explanation 2 to Section 5</strong> of the Income-tax Act clarifies that once an item of income is included in an assessee’s total income and subjected to tax on the grounds of its accrual (or deemed accrual), it cannot be included again in their total taxable income. Consequently, it cannot be subjected to tax either in the same year or in a subsequent year on the grounds of its receipt, regardless of whether that receipt is actual or deemed. <br><br>

            <strong>Example:</strong> Interest on securities accrues daily but is paid quarterly. If the interest for the first quarter is included in the assessee's income and taxed on an accrual basis, the actual receipt of that interest in the bank in the next quarter will not be taxed again. <br><br>
`
    },
    {
        question: "22. Does taking an item of income into account in a balance sheet prepared in India automatically mean the income is \"deemed to be received\" in India?",
        answer: `
            <strong>No</strong>, taking an item of income into account in a balance sheet prepared in India does not automatically mean the income is "deemed to be received" in India. 

            According to <strong>Explanation 1 to Section 5</strong> of the Income-tax Act, an item of income that accrues or arises outside India <strong>shall not be deemed to be received in India merely because it is taken into account in a balance sheet prepared in India</strong>. <br><br>

            This specific explanation was introduced into the law to remove difficulties and clarify doubts regarding the taxation of such income, ensuring that mere accounting entries do not trigger tax liability on a receipt basis. <br><br>
`
    },
    {
        question: " 23.  What types of income are deemed to accrue or arise in India under section 9(1)(i) (e.g., through business connections, property, or transfer of a capital asset)? ",
        answer: `
            Under Section 9(1)(i) of the Income-tax Act, certain categories of income are deemed to accrue or arise in India, even if they actually accrue, arise, or are received outside of India. Specifically, any income accruing or arising to an assessee directly or indirectly through the following four avenues falls under this provision:<br><br>

            1.  <strong>Through or from any business connection in India</strong>.<br><br>
            2.  <strong>Through or from any property in India:</strong> This applies to any income arising from property, whether it is movable, immovable, tangible, or intangible.<br><br>
            3.  <strong>Through or from any asset or source of income in India</strong>.<br><br>
            4.  <strong>Through the transfer of a capital asset situated in India:</strong> Any capital gains arising from the transfer of a capital asset located in India is deemed to accrue or arise in India. This applies unconditionally, regardless of whether the asset is movable or immovable, whether the transfer documents are registered in India or abroad, or whether the payment for the transfer is made within India or outside.<br><br>

            Here are some <strong>examples</strong> to illustrate how Section 9(1)(i) is applied in practice:<br><br>

            <strong>Example 1: Business Connection in India</strong><br>
                A Japanese manufacturing company operates out of Tokyo but maintains an exclusive dependent agent in Mumbai. This agent regularly secures orders and concludes contracts on behalf of the Japanese company. Even though the company is a non-resident and the final payments are made in Tokyo, the portion of the profit that is reasonably attributable to the sales operations carried out by the agent in Mumbai is deemed to accrue or arise in India due to this business connection.<br><br>
            <strong>Example 2: Property or Asset situated in India</strong><br>
                Ms. Clara, a resident of France, owns high-end film shooting equipment (movable tangible property) which is currently kept in Hyderabad. She leases this equipment to an Indian production house. Even if the lease agreement is signed in Paris and the monthly rental charges are deposited directly into her French bank account, the rental income is deemed to accrue or arise in India because the property generating the income is situated in India.<br><br>
            <strong>Example 3: Transfer of a Capital Asset situated in India</strong><br>
                Mr. Smith, an American citizen living in New York, holds a 20% equity stake (shares) in an Indian domestic company. He decides to sell these shares to Ms. Jones, an Australian citizen. They negotiate the deal in London, sign the transfer documents in Dubai, and the purchase consideration of $2 million is transferred from Ms. Jones's Sydney bank account to Mr. Smith's New York bank account. Despite the entire transaction happening outside India between two non-residents, the capital gains arising from this sale are deemed to accrue or arise in India. This is because the underlying capital asset (the shares of the Indian company) is situated in India.<br><br>    
`
    },
    {
        question: "24. What specific operations carried out by a non-resident in India (such as purchasing goods for export or collecting news) are exempt from being deemed to accrue or arise in India?",
        answer: `
            Under Explanation 1 to Section 9(1)(i) of the Income-tax Act, there are specific statutory exemptions for non-residents. Even if these operations occur within India, the income generated from them is <strong>not</strong> deemed to accrue or arise in India, and therefore is not taxable in India: <br><br>

            <strong>Purchase of goods for export:</strong> If a non-resident's operations within India are strictly confined to purchasing goods for the purpose of exporting them out of the country, no income from these operations is deemed to accrue or arise in India. <br><br>
            <strong>Collection of news and views:</strong> If a non-resident is engaged in the business of running a news agency or publishing newspapers, magazines, or journals, no income is deemed to accrue or arise from activities that are confined to collecting news and views in India for transmission outside of India. <br><br>
            <strong>Shooting of cinematograph films:</strong> Income from operations confined strictly to shooting a cinematograph film within India is exempt from being deemed to accrue or arise in India, provided the non-resident meets specific criteria: <br><br>
            <ul>
                <li><strong>If an individual</strong>, they must not be an Indian citizen. </li>
                <li><strong>If a firm</strong>, it must not have any partner who is an Indian citizen or a resident of India. </li>
                <li><strong>If a company</strong>, it must not have any shareholder who is an Indian citizen or a resident of India. </li>
            </ul><br>
            <strong>Display of rough diamonds:</strong> For a foreign company engaged in the business of diamond mining, no income is deemed to accrue or arise in India from activities confined to the display of uncut and unassorted diamonds in any Special Notified Zone (SNZ) officially notified by the Central Government. <br><br>
            <strong>Operations partially outside India:</strong> As a broader principle, if a non-resident's business does not carry out <strong>all</strong> of its operations in India, only the portion of the income that can be <strong>reasonably attributable to the operations carried out in India</strong> is deemed to accrue or arise in India. The portion of income reasonably attributable to the operations carried out outside of India is exempt. <br><br>
`
    },
    {
        question: "25. When is income under the head “Salaries” deemed to accrue or arise in India, and how are rest periods and leave periods treated?",
        answer: `
            Under Section 9(1)(ii) of the Income-tax Act, income falling under the head "Salaries" is deemed to accrue or arise in India if it is <strong>earned in India</strong>. The law specifies that salary payable for <strong>services actually rendered in India</strong> is treated as earned in India.<br><br>

            Regarding <strong>rest periods and leave periods</strong>, the salary payable for such periods is also regarded as income earned in India (and thus deemed to accrue or arise in India) if it satisfies the following two conditions:<br><br>
            1. The rest or leave period is <strong>preceded and succeeded by services rendered in India</strong>.<br>
            2. The rest or leave period <strong>forms part of the service contract of employment</strong>.<br><br>
`
    },
    {
        question: "26.  How is salary payable by the Government of India to an Indian citizen for services rendered outside India taxed, and what is the treatment of allowances and perquisites paid to them outside India?",
        answer: `
            Salary payable by the Government of India to an Indian citizen for services rendered outside India is <strong>deemed to accrue or arise in India</strong> under Section 9(1)(iii) of the Income-tax Act. As a result, this salary is fully taxable in India, even if the individual qualifies as a non-resident for tax purposes.<br><br>

            However, the tax treatment of allowances and perquisites is entirely different.<br><br> Any <strong>allowances and perquisites paid or allowed outside India</strong> by the Government to an Indian citizen for rendering these overseas services are <strong>completely exempt from income tax</strong> under Section 10(7). Furthermore, this exemption is available to the assessee irrespective of the tax regime under which they choose to pay their taxes.<br><br>
`
    },
    {
        question: "27. Under what situations will interest payable by a non-resident be deemed to accrue or arise in India?",
        answer: `
            Under Section 9(1)(v) of the Income-tax Act, interest payable by a non-resident is deemed to accrue or arise in India <strong>only when it is payable in respect of a debt incurred or moneys borrowed and used for the purpose of a business or profession carried on by that non-resident in India</strong>.<br><br>

            If the non-resident borrows the money for any purpose in India other than for running a business or profession, the interest will <strong>not</strong> be deemed to accrue or arise in India. <br><br>

            <strong>Illustrative Example:</strong><br><br>
            If a non-resident ('A') borrows money from another non-resident ('B') and invests those funds in the shares of an Indian company, the interest payable by 'A' to 'B' will not be deemed to accrue or arise in India. This is because the borrowed money was used for making an investment, not for carrying on a business or profession in India.<br><br>
        `
    },
    {
        question: "28. What constitutes \"royalty\" under section 9(1)(vi), and does it include lump-sum consideration for the use of computer software?",
        answer: `
            Under Section 9(1)(vi) of the Income-tax Act, <strong>"royalty" is defined broadly as any consideration (including any lump-sum consideration, but excluding income chargeable under the head "Capital gains")</strong> paid for the following activities:<br><br>
            <ul>
                <li>The transfer of all or any rights (including the granting of a license), the use of, or the imparting of information concerning the working or use of a patent, invention, model, design, secret formula or process, trademark, or similar property.</li><br>
                <li>The imparting of any information concerning technical, industrial, commercial, or scientific knowledge, experience, or skill.</li><br>
                <li>The use or right to use any industrial, commercial, or scientific equipment.</li><br>
                <li>The transfer of all or any rights (including the granting of a license) in respect of any copyright, literary, artistic, or scientific work. This includes films or video tapes for use in television or radio broadcasting, and any consideration for the sale, distribution, or exhibition of cinematographic films.</li><br>
                <li>The rendering of any service in connection with any of the activities listed above.</li><br>
            </ul><br>
            The law clarifies that consideration for any right, property, or information constitutes a royalty <strong>regardless of whether the payer has possession or control of it, whether it is used directly by the payer, or whether it is located in India</strong>. <br><br>
            <strong>Regarding computer software:</strong><br><br>
            Yes, the consideration for the use or right to use computer software is explicitly included within the meaning of royalty. The law clarifies that the transfer of all or any rights includes the right to use computer software (including the granting of a license), irrespective of the medium through which the right is transferred. Since the definition of royalty covers "any lump-sum consideration", a lump-sum payment for software generally qualifies as royalty.<br><br>

            <strong>Exception for specific lump-sum payments:</strong><br><br>
            There is a specific statutory exception where a lump-sum royalty payment will <strong>not</strong> be deemed to accrue or arise in India. This applies only if:<br><br>
            1. The lump-sum payment is made by a resident for the transfer of rights (including granting a license) for computer software.<br><br>
            2. The software is supplied by a non-resident manufacturer <strong>along with computer hardware</strong>.<br><br>
            3. The transaction happens under a scheme approved by the Government under the Policy on Computer Software Export, Software Development and Training, 1986.<br><br>
        `
    },
    {
        question: "29. When are \"fees for technical services\" (FTS) deemed to accrue or arise in India if paid by a non-resident?",
        answer: `
            Under Section 9(1)(vii) of the Income-tax Act, fees for technical services paid by a non-resident are deemed to accrue or arise in India <strong>only</strong> under specific circumstances related to where the services are used. 

            Specifically, the fees are deemed to accrue or arise in India if the technical services are <strong>utilized</strong> for:<br><br>
            1.  <strong>A business or profession carried on by the non-resident in India</strong>, or<br><br>
            2.  <strong>The purpose of making or earning any income from any source in India</strong>.<br><br>

            <strong>Important Clarification on Territorial Nexus:</strong><br><br>
            According to the Explanation to Section 9, if the services are utilized in India as described above, the income is deemed to accrue or arise in India regardless of whether the non-resident providing the services has a residence, place of business, or business connection in India. Furthermore, it is irrelevant whether the services were actually rendered inside or outside India; the crucial factor is where the services are <strong>utilized</strong>.<br><br>

            <strong>Illustrative Example:</strong><br><br>
            Suppose Miss Vivitha (a non-resident) pays a management consultant, Mr. Kulasekhara (also a non-resident based in Colombo), a fee of 5,000 USD for consultancy services regarding project financing. The payment is made in Colombo, but the consultancy is related to a project situated in India. <br><br>
            <strong>Conclusion:</strong><br><br> Even though both parties are non-residents, the services were rendered outside India, and the payment was made outside India, the fees for technical services are deemed to accrue or arise in India because the services were <strong>utilized in India</strong> for the Indian project. Therefore, this income is chargeable to tax in India in the hands of Mr. Kulasekhara.
        `
    },
    {
        question: "30. Does the Income-tax Act require a non-resident to have a territorial nexus (like a residence, place of business, or actual rendering of services in India) to tax their income from interest, royalty, or FTS?",
        answer: `
            <strong>No</strong>, the Income-tax Act does not require a non-resident to have a territorial nexus in India for their income from interest, royalty, or fees for technical services (FTS) to be taxable. <br><br>

            According to the <strong>Explanation to Section 9</strong>, if income by way of interest, royalty, or FTS is deemed to accrue or arise in India, it will be included in the total taxable income of the non-resident irrespective of whether:<br><br>
            1. The non-resident has a residence, a place of business, or a business connection in India.<br><br>
            2. The non-resident has actually rendered the services within India.<br><br>

            The crucial factor is where the services, money, or rights are <strong>utilized</strong>. As long as they are utilized for a business, profession, or source of income in India, the resulting interest, royalty, or FTS is taxable in India, making the physical presence or territorial connection of the non-resident completely irrelevant.
        `
    },
    {
        question: "31. Under what circumstances is a sum of money exceeding ₹50,000 paid by a resident Indian to a non-corporate non-resident or a foreign company deemed to accrue or arise in India?",
        answer: `
        Under Section 9(1)(viii) of the Income-tax Act, a sum of money exceeding ₹50,000 paid by a resident Indian to a non-corporate non-resident or a foreign company (as well as to a "Resident but not ordinarily resident") is deemed to accrue or arise in India if the money is paid <strong>without consideration</strong> (i.e., as a gift). <br><br>

        For this deeming provision to apply, the following circumstances must be met:<br><br>
        <ul>
            <li><strong>Without Consideration:</strong> The payment must be made without any consideration in return.</li><br>
            <li><strong>Threshold:</strong> The aggregate of such sum received must exceed ₹50,000, making it chargeable to tax under Section 56(2)(x).</li><br>
            <li><strong>Applies Only to Money:</strong> The law specifically restricts this provision to sums of <strong>money</strong> paid outside India. It does <strong>not</strong> apply if a resident Indian transfers property (whether movable or immovable) outside India without consideration or for inadequate consideration.</li><br>
        </ul>

        <strong>Illustrative Example:</strong><br><br>

        Mr. Krishnan (a resident of India) gifts a sum of ₹1,00,000 to his friend, Ms. Sravanthi (a non-corporate non-resident), who resides in the USA. Since the payment exceeds ₹50,000 and is made without any consideration, the entire sum of ₹1,00,000 is deemed to accrue or arise in India in the hands of Ms. Sravanthi and is therefore taxable in India under Section 56(2)(x).
        `
    }
];
