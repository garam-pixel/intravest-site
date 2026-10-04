// V series content: loads after y-content.js and adjusts IVC.
// Taglines follow the sogo-shosha pattern (short English line + Japanese sub-copy):
// ITOCHU "I am One with Infinite Missions", Marubeni "Global crossvalue platform", Mitsui "360° business innovation",
// Toyota Tsusho "Be the Right ONE", Sojitz "New way, New value", Metal One "Creating New Value...", Hanwa "Connecting All Wants and Needs".
(function(C){
C.tag={
  1:{en:'Material. Capital. Trust.',ja:'素材と、資本と、信頼と。'},
  2:{en:'Where steel meets capital.',ja:'鋼と資本が出会う場所。'},
  3:{en:'One partner. Two strengths.',ja:'ひとつのパートナー、ふたつの強み。'},
  4:{en:'Supply, underwritten.',ja:'裏付けのある供給。'},
  5:{en:'From allocation to arrival.',ja:'配分から到着まで。'},
  6:{en:'Steel, delivered with conviction.',ja:'確信をもって届ける鋼。'},
  7:{en:'Connecting mills to makers.',ja:'製鉄所とメーカーをつなぐ。'},
  8:{en:'Every ton on our own account.',ja:'一トンごとに、自社の責任で。'},
  9:{en:'Capital that moves material.',ja:'素材を動かす資本。'},
  10:{en:'Quietly essential.',ja:'静かに、不可欠に。'}
};
C.sub={en:'Investment and international material supply, Seoul.',ja:'投資と国際マテリアルサプライ、ソウル。'};
// the mill line moves to the middle of the page, low key
C.mills={k:{en:'Mill-direct',ja:'製鉄所直送'},en:'Supplied mill-direct from the integrated steelworks of Korea and Japan.',ja:'韓国・日本の一貫製鉄所から直接供給しています。'};
// facts: founded, headquartered, solid capital, mill-direct, focus
C.facts=[
  {k:{en:'Founded',ja:'設立'},b:'2016',s:{en:'Seoul, Korea',ja:'韓国・ソウル'}},
  {k:{en:'Headquartered',ja:'本社所在地'},b:{en:'Seoul CBD',ja:'ソウル都心'},s:{en:'Gwanghwamun · Kyobo Life Building 15F',ja:'光化門・教保生命ビル15階'}},
  {k:{en:'Capital',ja:'資本'},b:{en:'Solid capital',ja:'堅実な資本'},s:{en:'Own capital behind every order',ja:'すべての注文を自己資本で'}},
  {k:{en:'Mill-direct',ja:'製鉄所直送'},b:{en:'Korea · Japan',ja:'韓国・日本'},s:{en:'Direct supply from major integrated mills',ja:'主要一貫製鉄所からの直接供給'}},
  {k:{en:'Focus',ja:'専門'},b:{en:'Ferritic · GBFS',ja:'フェライト系・GBFS'},s:{en:'Stainless coil, tube and slag',ja:'ステンレスコイル・鋼管・スラグ'}}
];
// why: quality, delivery, financing, devotion
C.edge=[
  {t:{en:'Quality',ja:'品質'},d:{en:'Mill-certified, traceable to the heat number.',ja:'ミル証明付き、溶鋼番号まで追跡可能。'}},
  {t:{en:'Delivery',ja:'納期'},d:{en:'Priority production slots, delivery dates kept.',ja:'優先生産枠を確保し、納期を守ります。'}},
  {t:{en:'Financing',ja:'ファイナンス'},d:{en:'Terms in the form each customer needs.',ja:'お客様が求める形の決済条件。'}},
  {t:{en:'Devotion',ja:'献身'},d:{en:'Attentive, seamless follow-up from order to line.',ja:'注文からラインまで、途切れない丁寧なフォロー。'}}
];
// investment: advanced methods in the US market, stability and profitability, lower trading margins
C.pillars.investment={t:{en:'Investment',ja:'投資'},
  d:{en:'Advanced investment methods in the US financial market maximize stability and profitability. Those returns let us keep trading margins thin and offer competitive prices.',ja:'米国金融市場での高度な投資手法により、安定性と収益性を最大化。その収益が商社マージンを薄くし、競争力ある価格を可能にします。'},
  k:{en:['US financial market','Stability and profitability','Competitive prices'],ja:['米国金融市場','安定性と収益性','競争力ある価格']}};
C.inv={
  title:{en:'Returns that lower your price.',ja:'お客様の価格を下げる収益。'},
  intro:{en:'Intravest invests its own capital in the advanced US financial market, using sophisticated, risk-managed methods to maximize both stability and profitability. The returns are not kept apart from trading: they let us run material supply on thinner margins, so customers buy at more competitive prices.',ja:'イントラベストは自己資本を先進的な米国金融市場で、高度なリスク管理型の手法により運用し、安定性と収益性を最大化しています。その収益は商社業務と切り離されたものではなく、マテリアルサプライを薄いマージンで運営し、お客様により競争力ある価格で提供するための力です。'},
  items:[
    {t:{en:'Advanced methods',ja:'高度な投資手法'},d:{en:'Sophisticated, research-driven strategies in the US financial market, run under strict risk limits.',ja:'米国金融市場での調査主導の高度な戦略を、厳格なリスク限度のもとで運用。'}},
    {t:{en:'Stability and profitability',ja:'安定性と収益性'},d:{en:'Returns built to compound steadily, forming the base of our balance sheet.',ja:'着実に複利で積み上がる収益が、バランスシートの基盤。'}},
    {t:{en:'Thinner trading margins',ja:'薄い商社マージン'},d:{en:'Investment income lets us price material supply competitively and finance orders on our own account.',ja:'投資収益により、マテリアルサプライを競争力ある価格で提供し、注文を自社勘定でファイナンス。'}}
  ],
  rule:{en:'Investments are made with the company’s own capital only. We do not manage outside funds.',ja:'投資は自己資本のみで行い、外部資金の運用は行っていません。'}
};
// supply page: operations, insight, logistics, financing (replaces the document list)
C.sup={
  title:{en:'From the mill berth to your line.',ja:'製鉄所の岸壁から、お客様のラインへ。'},
  intro:{en:'We work directly with the major integrated mills of Korea and Japan and follow each order from production slot to delivery with the same team.',ja:'韓国・日本の主要一貫製鉄所と直接取引し、生産枠の確保から納品まで同じチームが各注文を担当します。'},
  ops:{k:{en:'Operations',ja:'オペレーション'},items:[
    {t:{en:'Real-time production tracking',ja:'リアルタイムの生産状況管理'},d:{en:'Production status followed in real time at the mill and shared with the customer.',ja:'製鉄所での生産状況をリアルタイムで把握し、お客様と共有。'}},
    {t:{en:'Priority production slots',ja:'優先生産枠の確保'},d:{en:'Slots secured ahead at the mill, so delivery is planned, not hoped for.',ja:'製鉄所の生産枠を先に確保し、納期を計画として組み立てます。'}},
    {t:{en:'Delivery kept, managed',ja:'徹底した納期履行・管理'},d:{en:'Delivery dates kept and managed to the day, with early notice of any change.',ja:'納期を日単位で守り管理し、変更があれば早期に通知。'}},
    {t:{en:'Seamless after-service',ja:'途切れないアフターフォロー'},d:{en:'Claims, documents and the next order handled by the same people, without a gap.',ja:'クレーム・書類・次の注文まで、同じ担当者が途切れなく対応。'}}
  ]},
  insight:{k:{en:'Market insight',ja:'市況インサイト'},items:[
    {t:{en:'Market updates',ja:'市況の共有'},d:{en:'Fast notice of price and supply moves, so customers can buy at the right moment.',ja:'価格と供給の変動を迅速に通知し、適切なタイミングでの購買を支援。'}},
    {t:{en:'Industry insight',ja:'産業インサイト'},d:{en:'Perspective on the steel and automotive supply chain, not just today’s quote.',ja:'今日の見積りだけでなく、鉄鋼・自動車サプライチェーン全体の視点を提供。'}},
    {t:{en:'Latest issues',ja:'最新の産業イシュー'},d:{en:'Regulation, mill schedules and freight shared early, for rational decisions.',ja:'規制・製鉄所のスケジュール・運賃を早めに共有し、合理的な判断を支援。'}}
  ]},
  logi:{k:{en:'Logistics and financing',ja:'物流とファイナンス'},items:[
    {t:{en:'Sea freight and packing',ja:'海上輸送と梱包'},d:{en:'Exacting about vessel, stowage and packing: material arrives as it left the mill.',ja:'本船・積付け・梱包に厳格。製鉄所を出た状態のまま届けます。'}},
    {t:{en:'Financing in your form',ja:'お客様の形でのファイナンス'},d:{en:'L/C, T/T or terms on our own account, structured around the customer’s cash cycle.',ja:'L/C、T/T、自社勘定での決済条件を、お客様の資金サイクルに合わせて設計。'}},
    {t:{en:'Trust',ja:'信頼'},d:{en:'Long-term supply relationships with the mills, and the same commitment to every customer.',ja:'製鉄所との長期供給関係と、すべてのお客様への変わらぬ献身。'}}
  ]},
  fta:{k:{en:'FTA documentation support',ja:'FTA書類サポート'},d:{en:'Korea’s FTA network lets many customers import duty-free or at reduced tariffs. We prepare the certificates of origin and supporting documents for the agreement that applies.',ja:'韓国のFTAネットワークにより、多くのお客様が無税または低関税で輸入できます。該当する協定の原産地証明書と関連書類を当社が準備します。'},groups:[{k:{en:'ASEAN and Asia-Pacific',ja:'ASEAN・アジア太平洋'},v:'Korea–ASEAN FTA · RCEP · Korea–Vietnam · Korea–Indonesia CEPA · Korea–Philippines · Korea–Cambodia · Korea–Singapore · Korea–India CEPA · Korea–China · Korea–Australia · Korea–New Zealand'},{k:{en:'Americas',ja:'米州'},v:'KORUS FTA (United States) · Korea–Canada · Korea–Chile · Korea–Peru · Korea–Colombia · Korea–Central America'},{k:{en:'Europe and Middle East',ja:'欧州・中東'},v:'Korea–EU FTA · Korea–UK FTA · Korea–EFTA · Korea–Türkiye · Korea–Israel'}]}
};
// products
C.products=[
  {id:'coil',n:{en:'Stainless Steel Coil',ja:'ステンレスコイル'},tag:{en:'Ferritic chromium stainless, cold- and hot-rolled',ja:'フェライト系クロムステンレス、冷延・熱延'},
    g:['409L','429','439','441','AL409','AL439'],
    desc:{en:'Titanium- and niobium-stabilized ferritic grades for exhaust systems and tube mills, plus aluminized AL409 and AL439 for mufflers. Specifications matched to Hyundai-Kia and Japanese OEM technical standards, supplied for years and ready for running changes by automotive project code.',ja:'排気系および造管向けのTi・Nb安定化フェライト系鋼種に加え、マフラー向けのアルミめっきAL409・AL439。現代起亜および日系OEMの技術規格に合わせた仕様を長年供給し、自動車プロジェクトコードに応じたランニングチェンジにも対応。'},
    grades:[['409L',{en:'11% Cr, Ti-stabilized. General exhaust: tailpipes, mufflers, converter shells.',ja:'11%Cr、Ti安定化。テールパイプ・マフラー・コンバーターシェル。'}],['439',{en:'17–18% Cr, Ti-stabilized. Oxidation and chloride resistance beyond 409; front pipes, tubular manifolds.',ja:'17〜18%Cr、Ti安定化。409を超える耐酸化・耐塩化物性。フロントパイプ・管状マニホールド。'}],['441',{en:'18% Cr, Ti + Nb dual-stabilized. High-temperature strength above 409 and 439, good weld ductility.',ja:'18%Cr、Ti+Nb二重安定化。409・439を上回る高温強度と良好な溶接延性。'}],['AL409 · AL439',{en:'Aluminized ferritic for mufflers. Strong resistance to exterior discoloration, adopted by Korean and US automakers. Excellent formability: no coating cracks during forming. Specs matched to Hyundai-Kia and Japanese OEM standards; running-change-ready by project code.',ja:'マフラー向けアルミめっきフェライト系。外観変色への強い耐性で韓国・米国の自動車メーカーが採用。成形中にめっき面が割れない優れた加工性。現代起亜・日系OEM規格に合わせた仕様で、プロジェクトコードごとのランニングチェンジに対応。'}]],
    spec:[[{en:'Cold-rolled',ja:'冷延'},'t 0.3 – 3.0 mm'],[{en:'Hot-rolled',ja:'熱延'},'t 3.0 – 8.0 mm'],[{en:'Width',ja:'板幅'},'1,000 – 1,500 mm'],[{en:'Certificates',ja:'証明書'},{en:'Mill test certificate traceable to the heat number · ISO · national certifications such as BIS',ja:'溶鋼番号まで追跡可能なミルシート・ISO・BISなど各国認証'}]],
    use:{en:['Automotive exhaust systems','Mufflers (AL409 · AL439)','Tube and pipe mills'],ja:['自動車排気系','マフラー（AL409・AL439）','造管メーカー']}},
  {id:'pipe',n:{en:'Stainless Steel Pipe',ja:'ステンレス鋼管'},tag:{en:'Welded ferritic stainless tube for exhaust, sanitary and construction use',ja:'排気・衛生配管・建築向けフェライト系ステンレス溶接管'},
    g:['409','409L','439','441','AL409','AL439','430LX'],
    desc:{en:'Straight-seam welded tube from mill-direct ferritic coil, built to each OEM’s technical specification and already in supply to Hyundai-Kia programs. Packed for stability in transit, so tube arrives straight, clean and ready for the line.',ja:'製鉄所直送のフェライト系コイルから造管した直縫溶接管。各OEMの技術仕様に合わせて製造し、現代起亜向けプログラムにすでに供給中。輸送中の安定性を重視した梱包で、真直で清浄なままラインへ。'},
    grades:[['409 · 409L',{en:'Cold-end exhaust: tailpipes, mufflers.',ja:'排気系低温部：テールパイプ・マフラー。'}],['439 · 441',{en:'Hot-end exhaust: front pipes, manifolds.',ja:'排気系高温部：フロントパイプ・マニホールド。'}],['AL409 · AL439',{en:'Aluminized tube for mufflers; discoloration resistance.',ja:'マフラー向けアルミめっき管。耐変色性。'}],['430LX',{en:'Low-carbon, Ti-stabilized 16–18% Cr ferritic for sanitary tube and construction; good weldability and formability.',ja:'低炭素Ti安定化16〜18%Crフェライト系。衛生配管・建築用途、良好な溶接性と加工性。'}]],
    spec:[['OD','12.7 – 101.6 mm'],[{en:'Wall',ja:'肉厚'},'0.6 – 3.0 mm'],[{en:'Length',ja:'長さ'},'3 – 8 m'],[{en:'Weld',ja:'溶接'},{en:'Straight seam',ja:'直縫'}],[{en:'Packing',ja:'梱包'},{en:'Bundled and braced for transit stability',ja:'輸送安定性を重視した結束・固定'}]],
    use:{en:['Automotive exhaust (Hyundai-Kia programs in supply)','Automotive OEM and Tier 1','Sanitary tube and construction (430LX)'],ja:['自動車排気系（現代起亜向け供給中）','自動車OEM・Tier 1','衛生配管・建築（430LX）']}},
  {id:'slag',n:{en:'GBFS Slag',ja:'高炉水砕スラグ'},tag:{en:'Granulated blast-furnace slag, loaded fresh at the mill berth',ja:'製鉄所の岸壁で積み込む新鮮な高炉水砕スラグ'},
    g:['GBFS'],
    desc:{en:'Molten blast-furnace slag quenched in water into a glassy, latent-hydraulic granulate. We ship it soon after production, loaded directly at the mill berth without unnecessary domestic trucking, so only the best-condition material goes aboard. Ground, it replaces 30–50% of clinker in slag cement and ready-mix and cuts the binder’s CO₂ by up to 40%.',ja:'溶融高炉スラグを水で急冷したガラス質の潜在水硬性粒。生産後間もなく、不要な国内トラック輸送なしに製鉄所の岸壁で直接積み込み、最良の状態の材料だけを送ります。粉砕して高炉セメント・生コンのクリンカーを30〜50%置換し、結合材のCO₂を最大40%削減。'},
    grades:[[{en:'Fresh from the mill',ja:'製鉄所から直送'},{en:'Shipped soon after production, loaded at the mill berth.',ja:'生産後すぐ、製鉄所の岸壁で積み込み。'}],[{en:'Market timing',ja:'市況タイミング'},{en:'Fast notice of market moves, so customers buy at competitive prices.',ja:'市況変動を即時通知し、競争力ある価格での購買機会を提供。'}],[{en:'Long-term supply',ja:'長期供給'},{en:'Long-term supply relationships built with the mills.',ja:'製鉄所との長期供給関係を構築。'}]],
    spec:[[{en:'Form',ja:'形態'},{en:'Granulated, glassy',ja:'水砕・ガラス質'}],[{en:'Lot',ja:'ロット'},'25,000 – 50,000 MT'],[{en:'Shipment',ja:'輸送'},{en:'Bulk vessel, loaded at the mill berth',ja:'バラ積み船、製鉄所の岸壁で積み込み'}]],
    use:{en:['Slag cement','Ready-mix concrete','Lower-carbon binders'],ja:['高炉セメント','生コンクリート','低炭素結合材']}}
];
C.ct.f={email:{en:'Your email',ja:'メールアドレス'},company:{en:'Company',ja:'会社名'},port:{en:'Destination port',ja:'仕向港'},product:{en:'Product',ja:'製品'},msg:{en:'Inquiry (grade / size / quantity / usage)',ja:'お問い合わせ（鋼種／サイズ／数量／用途）'},send:{en:'Send',ja:'送信'},sending:{en:'Sending…',ja:'送信中…'},done:{en:'Thank you. Your inquiry has reached us; we will reply to the address you gave.',ja:'ありがとうございます。お問い合わせを受け付けました。ご記入のアドレスへご返信します。'},fail:{en:'Sending failed. Please email us directly at garam@intravest.co.kr.',ja:'送信に失敗しました。garam@intravest.co.kr まで直接ご連絡ください。'},wait:{en:'Please wait a moment before sending again.',ja:'少し時間をおいてから再送信してください。'}};
C.ct.intro={en:'Tell us the material, size, quantity and destination. Press Send and your inquiry comes straight to us.',ja:'材料・サイズ・数量・仕向地をお知らせください。送信ボタンで、お問い合わせが直接当社に届きます。'};
C.shared={g:['409','409L','429','439','441','AL409','AL439','430LX'],
  grades:[['409 · 409L',{en:'11% Cr, Ti-stabilized. General exhaust: tailpipes, mufflers, converter shells.',ja:'11%Cr、Ti安定化。テールパイプ・マフラー・コンバーターシェル。'}],['439',{en:'17–18% Cr, Ti-stabilized. Oxidation and chloride resistance beyond 409; front pipes, tubular manifolds.',ja:'17〜18%Cr、Ti安定化。409を超える耐酸化・耐塩化物性。フロントパイプ・管状マニホールド。'}],['441',{en:'18% Cr, Ti + Nb dual-stabilized. High-temperature strength above 409 and 439, good weld ductility.',ja:'18%Cr、Ti+Nb二重安定化。409・439を上回る高温強度と良好な溶接延性。'}],['AL409 · AL439',{en:'Aluminized ferritic for mufflers. Strong resistance to exterior discoloration, adopted by Korean and US automakers. Excellent formability: no coating cracks during forming. Specs matched to Hyundai-Kia and Japanese OEM standards; running-change-ready by project code.',ja:'マフラー向けアルミめっきフェライト系。外観変色への強い耐性で韓国・米国の自動車メーカーが採用。成形中にめっき面が割れない優れた加工性。現代起亜・日系OEM規格に合わせた仕様で、プロジェクトコードごとのランニングチェンジに対応。'}],['430LX',{en:'Low-carbon, Ti-stabilized 16–18% Cr ferritic for sanitary tube and construction; good weldability and formability.',ja:'低炭素Ti安定化16〜18%Crフェライト系。衛生配管・建築用途、良好な溶接性と加工性。'}]],
  use:{en:['Automotive exhaust systems (Hyundai-Kia and Japanese OEM programs)','Mufflers (AL409 · AL439)','Tube and pipe mills','Sanitary tube and construction (430LX)'],ja:['自動車排気系（現代起亜・日系OEMプログラム）','マフラー（AL409・AL439）','造管メーカー','衛生配管・建築（430LX）']}};
C.L.grades2={en:'Grade guide',ja:'鋼種ガイド'};C.L.scenes={en:'At the mill',ja:'製鉄所にて'};
C.L.tag={en:'Our line',ja:'私たちの一行'};
})(window.IVC);
