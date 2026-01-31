const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Your Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Future Plan',
      input: 'api heta gamata yamudha?',
      expected: 'අපි හෙට ගමට යමුද?',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Past Action',
      input: 'guruthumiya poth balalaa ivarayi.',
      expected: 'ගුරුතුමිය පොත් බලලා ඉවරයි.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Compound Sentence',
      input: 'adha vahinavaa , ee nisaa api gedhara navathimu saha paadam vaeda karamu.',
      expected: 'අද වහිනවා , ඒ නිසා අපි ගෙදර නවතිමු සහ පාඩම් වැඩ කරමු.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Complex Condition',
      input: 'oyaa adha enavaanam mama kaeema uyalaa thiyannam.',
      expected: 'ඔයා අද එනවානම් මම කෑම උයලා තියන්නම්.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert long paragraph - style formal Singlish content to Sinhala',
      input: 'magee aluth laptop ekee windows update venna godak velaa giya nisaa mata zoom meeting ekata enna vunee naehae, eeth dhaen okkoma hari nisaa api vaeda tika karanna patan gamu. mee paara avurudhu kaleeta api okkoma kandy yanna plan karalaa thiyenne, eeka nisaa eeta kalin office ekee baara gaththa projects tika okkoma ivara kara ganna oonee.',
      expected: 'මගේ අලුත් laptop එකේ windows update වෙන්න ගොඩක් වෙලා ගිය නිසා මට zoom meeting එකට එන්න වුනේ නැහැ, ඒත් දැන් ඔක්කොම හරි නිසා අපි වැඩ ටික කරන්න පටන් ගමු. මේ පාර අවුරුදු කලේට අපි ඔක්කොම kandy යන්න plan කරලා තියෙන්නෙ, ඒක නිසා ඒට කලින් office එකේ බාර ගත්ත projects ටික ඔක්කොම ඉවර කර ගන්න ඕනේ.',
      category: 'Mixed Singlish + English',
      grammar: 'Complex sentence',
      length: 'L (≥300 characters)'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Question Form',
      input: 'oyaage mallita vayasa kiiyadha?',
      expected: 'ඔයාගෙ මල්ලිට වයස කීයද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Imperative Form',
      input: 'ikmanata yanna.',
      expected: 'ඉක්මනට යන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Negative Form',
      input: 'mata adha udheeta enna venne naee.',
      expected: 'මට අද උදේට එන්න වෙන්නෙ නෑ.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Greeting',
      input: 'suba raathriyak veevaa!',
      expected: 'සුබ රාත්‍රියක් වේවා!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Object Request',
      input: 'karuNaakaralaa magee potha poddak aran dhenna.',
      expected: 'කරුණාකරලා මගේ පොත පොඩ්ඩක් අරන් දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Simple Response',
      input: 'ov, mama eeka dhennam.',
      expected: 'ඔව්, මම ඒක දෙන්නම්.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Permission Ask',
      input: 'mata eka genath dhenna puluvandha?',
      expected: 'මට එක ගෙනත් දෙන්න පුලුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Informal Slang',
      input: 'machan kohomadha vaahanee?',
      expected: 'මචන් කොහොමද වාහනේ?',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Health Status',
      input: 'mata kaessa thiyenavaa.',
      expected: 'මට කැස්ස තියෙනවා.',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Location Phrase',
      input: 'gampaha town ekata',
      expected: 'gampaha town එකට',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Emphasis Speed',
      input: 'ikmanata ikmanata yanna.',
      expected: 'ඉක්මනට ඉක්මනට යන්න.',
      category: 'Word combination / phrase pattern',
      grammar: 'Imperative (command)',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Mixed Travel',
      input: 'api trip ekata jaffna yamu train ekee.',
      expected: 'අපි trip එකට jaffna යමු train එකේ.',
      category: 'Mixed Singlish + English',
      grammar: 'Future tense',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Group Pronoun',
      input: 'api okkoma colombo yanavaa.',
      expected: 'අපි ඔක්කොම colombo යනවා.',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Brand Terms',
      input: 'magee phone eka missing.',
      expected: 'මගේ phone එක missing.',
      category: 'Mixed Singlish + English',
      grammar: 'Present tense',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Professional Ask',
      input: 'email eka attach karalaa evanna late venna epaa.',
      expected: 'email එක attach කරලා එවන්න late වෙන්න එපා.',
      category: 'Mixed Singlish + English',
      grammar: 'Imperative (command)',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Short Document',
      input: 'NIC eka geenna.',
      expected: 'NIC එක ගේන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Cash Balance',
      input: 'magee balance eka Rs. 1000.',
      expected: 'මගේ balance එක Rs. 1000.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Time Schedule',
      input: 'meeting eka 9.00 AM thiyenne.',
      expected: 'meeting එක 9.00 AM තියෙන්නෙ.',
      category: 'Punctuation / numbers',
      grammar: 'Present tense',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Trip Narrative',
      input: 'adha udhee paaree vaahana anathurak velaa thiyena nisaa loku traefik ekak thiyenavaa. ee nisaa ena ayata parissamen enna kiyalaa kiyanna. mama baeluvee aluth laeptop ekee battery check karalaa, zoom meeting ekatath joyin velaama ennayi. oyaalaa mahanuvara giyaama hootalayee location eka mata whatsapp karanna puLuvandha? ee vageema mahanuvara trip ekee visthara okkoma mata dhaenma evanna.',
      expected: 'අද උදේ පාරේ වාහන අනතුරක් වෙලා තියෙන නිසා ලොකු ට්‍රැෆික් එකක් තියෙනවා. ඒ නිසා එන අයට පරිස්සමෙන් එන්න කියලා කියන්න. මම බැලුවේ අලුත් ලැප්ටොප් එකේ battery check කරලා, zoom meeting එකටත් ජොයින් වෙලාම එන්නයි. ඔයාලා මහනුවර ගියාම හෝටලයේ location එක මට whatsapp කරන්න පුළුවන්ද? ඒ වගේම මහනුවර trip එකේ විස්තර ඔක්කොම මට දැන්ම එවන්න.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'L (≥300 characters)'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Space Stress',
      input: 'mata                    gedhara       yanna    oonee.',
      expected: 'මට ගෙදර යන්න ඕනේ.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'No Space Stress',
      input: 'apidhaenehetayamu.',
      expected: 'අපි දැන් එහෙට යමු.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Spelling Typo',
      input: 'mge ptha balanna',
      expected: 'මගෙ පොත බලන්න',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Symbol Integration',
      input: 'mama @ home !!!',
      expected: 'මම @ home !!!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Vague Slang',
      input: 'supiri bokka!',
      expected: 'සුපිරි බොක්ක!',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Excessive Punctuation',
      input: 'kohomadha??????',
      expected: 'කොහොමද??????',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Line Break Paragraph',
      input: 'mama gedhara \\n giyaa saha \\n nidhagaththaa.',
      expected: 'මම ගෙදර \\n ගියා සහ \\n නිදාගත්තා.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Compound sentence',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'All Caps Stress',
      input: 'MAMA ENAVA',
      expected: 'මම එනව',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S (≤30 characters)'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Mixed Numbers',
      input: '5 apples thiyenavaa magee bag ekee.',
      expected: '5 apples තියෙනවා මගේ bag එකේ.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M (31–299 characters)'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Nonsense Input',
      input: 'xkjsdf kdjfhskjdf mama poth kiya sdfkjshdf oonee nisaa @@@ gedhara yanna --- ??? mama balanne kohomadha ### machan ekka trip ekata !!! email evanna puluvan $$$ dhaen dhaen meeting ekata --- laptop eka windows update ### oyaata kiyanna thiyenne ??? phone eka charge karanna @@@ office vada thika ivera karanna --- whatsapp msg ekak dhaapan !!! api okkoma kandy yanna plan karalaa $$$ thiyenne nisaa ### late venna epaa ???',
      expected: 'System should handle gracefully or show error message for nonsensical input',
      category: 'Nonsensical/gibberish input handling',
      grammar: 'Invalid input pattern',
      length: 'L (≥300 characters)'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_0001',
    name: 'Output Sync',
    input: 'mama gedhara yanavaa',
    partialInput: 'mama',
    expectedFull: 'මම ගෙදර යනවා',
    category: 'Empty/cleared input handling',
    grammar: 'Simple sentence',
    length: 'S (≤30 characters)'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
