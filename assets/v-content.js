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
// facts without the slag lot
C.facts=[
  {k:{en:'Founded',ja:'設立'},b:'2016',s:{en:'Seoul, Korea',ja:'韓国・ソウル'}},
  {k:{en:'Headquarters',ja:'本社'},b:{en:'Seoul CBD',ja:'ソウル都心'},s:{en:'Gwanghwamun · Kyobo Life Building 15F',ja:'光化門・教保生命ビル15階'}},
  {k:{en:'Capital',ja:'資本'},b:{en:'Own capital',ja:'自己資本'},s:{en:'Behind every order',ja:'すべての注文の裏付け'}},
  {k:{en:'Focus',ja:'専門'},b:{en:'Ferritic · GBFS',ja:'フェライト系・GBFS'},s:{en:'Stainless coil, tube and slag',ja:'ステンレスコイル・鋼管・スラグ'}}
];
// investment: advanced strategy, stable returns
C.pillars.investment={t:{en:'Investment',ja:'投資'},
  d:{en:'A disciplined, risk-managed investment strategy generates stable returns. That stability is what lets us commit to mills early and stand behind every order.',ja:'高度化されたリスク管理型の投資戦略が安定した収益を生みます。その安定が、製鉄所への早期コミットと全注文の裏付けを可能にしています。'},
  k:{en:['Advanced strategy','Stable returns','Own capital only'],ja:['高度な投資戦略','安定した収益','自己資本のみ']}};
C.inv={
  title:{en:'Disciplined strategy. Stable returns.',ja:'高度な戦略、安定した収益。'},
  intro:{en:'Intravest invests only its own capital, through a diversified, research-driven strategy run under strict risk limits. The aim is not the largest return but the steadiest one — a base that compounds and keeps the supply business moving.',ja:'イントラベストは自己資本のみを、厳格なリスク限度のもとで分散・調査主導の戦略により運用しています。目指すのは最大の収益ではなく、最も安定した収益。複利で積み上がり、供給事業を動かし続ける基盤です。'},
  items:[
    {t:{en:'Advanced strategy',ja:'高度な投資戦略'},d:{en:'Diversified positions, research-driven, managed with strict risk limits.',ja:'分散された調査主導のポジションを、厳格なリスク限度で運用します。'}},
    {t:{en:'Stable returns',ja:'安定した収益'},d:{en:'Returns built to compound steadily rather than swing. They are the base of our balance sheet.',ja:'振れ幅ではなく、着実な複利を狙う収益。当社のバランスシートの基盤です。'}},
    {t:{en:'Capital at work in supply',ja:'供給に働く資本'},d:{en:'Mill prepayment, inventory on our own account and payment terms that keep customers’ lines running.',ja:'製鉄所への前払い、当社勘定での在庫、お客様のラインを止めない決済条件。'}}
  ],
  rule:{en:'Investments are made with the company’s own capital only. We do not manage outside funds.',ja:'投資は自己資本のみで行い、外部資金の運用は行っていません。'}
};
// products, worded after mill and tube-maker datasheets (409/439/441 ferritic grades, welded exhaust tube, GBFS)
C.products=[
  {id:'coil',n:{en:'Stainless Steel Coil',ja:'ステンレスコイル'},tag:{en:'Ferritic chromium stainless, cold- and hot-rolled',ja:'フェライト系クロムステンレス、冷延・熱延'},
    g:['409L','429','439','441','AL409','AL439'],
    desc:{en:'Titanium- and niobium-stabilized ferritic grades for exhaust systems and tube mills. 409L for general exhaust service; 439 where oxidation and wet chloride resistance must exceed 409; 441 for high-temperature strength and weld ductility in manifolds and converter shells.',ja:'排気系および造管向けのTi・Nb安定化フェライト系鋼種。一般排気用途の409L、409の限界を超える耐酸化・耐塩化物腐食が必要な場合の439、マニホールドやコンバーターシェルに高温強度と溶接延性をもたらす441。'},
    grades:[['409L',{en:'11% Cr, Ti-stabilized. General exhaust: tailpipes, mufflers, converter shells.',ja:'11%Cr、Ti安定化。テールパイプ・マフラー・コンバーターシェル。'}],['439',{en:'17–18% Cr, Ti-stabilized. Oxidation and chloride resistance beyond 409; front pipes, tubular manifolds.',ja:'17〜18%Cr、Ti安定化。409を超える耐酸化・耐塩化物性。フロントパイプ・管状マニホールド。'}],['441',{en:'18% Cr, Ti + Nb dual-stabilized. High-temperature strength above 409 and 439, good weld ductility.',ja:'18%Cr、Ti+Nb二重安定化。409・439を上回る高温強度と良好な溶接延性。'}]],
    spec:[[{en:'Type',ja:'種類'},'CR · HR'],[{en:'Width',ja:'板幅'},'1,000 – 1,500 mm'],[{en:'Certificate',ja:'証明書'},{en:'Mill test certificate per coil',ja:'コイルごとのミルシート'}]],
    use:{en:['Automotive exhaust systems','Tube and pipe mills','Mufflers and converters'],ja:['自動車排気系','造管メーカー','マフラー・触媒コンバーター']}},
  {id:'pipe',n:{en:'Stainless Steel Pipe',ja:'ステンレス鋼管'},tag:{en:'Welded ferritic stainless tube for exhaust systems',ja:'排気系向けフェライト系ステンレス溶接管'},
    g:['409','409L','439','441','AL409','AL439'],
    desc:{en:'Straight-seam welded tube produced from mill-direct ferritic coil, sized for hot-end and cold-end exhaust: OD 12.7–101.6 mm, wall 0.6–3.0 mm, lengths 3–8 m. Grades matched to service temperature, from 409 for cold-end sections to 441 for manifolds and front pipes.',ja:'製鉄所直送のフェライト系コイルから造管する直縫溶接管。排気系の高温部・低温部に合わせた外径12.7〜101.6mm、肉厚0.6〜3.0mm、長さ3〜8m。低温部の409からマニホールド・フロントパイプの441まで、使用温度に応じた鋼種。'},
    spec:[['OD','12.7 – 101.6 mm'],[{en:'Wall',ja:'肉厚'},'0.6 – 3.0 mm'],[{en:'Length',ja:'長さ'},'3 – 8 m'],[{en:'Weld',ja:'溶接'},{en:'Straight seam',ja:'直縫'}]],
    use:{en:['Exhaust systems','Automotive OEM and Tier 1'],ja:['排気システム','自動車OEM・Tier 1']}},
  {id:'slag',n:{en:'GBFS Slag',ja:'高炉水砕スラグ'},tag:{en:'Granulated blast-furnace slag, a lower-carbon binder',ja:'高炉水砕スラグ、低炭素の結合材'},
    g:['GBFS'],
    desc:{en:'Molten blast-furnace slag quenched rapidly in water into a glassy, latent-hydraulic granulate. Ground, it replaces 30–50% of clinker in slag cement and ready-mix, improving resistance to chloride, sulfate and alkali–silica reaction while cutting the binder’s CO₂ by up to 40%.',ja:'溶融高炉スラグを水で急冷したガラス質の潜在水硬性粒。粉砕して高炉セメントや生コンのクリンカーを30〜50%置換し、塩化物・硫酸塩・アルカリシリカ反応への抵抗を高めながら結合材のCO₂を最大40%削減します。'},
    spec:[[{en:'Form',ja:'形態'},{en:'Granulated, glassy',ja:'水砕・ガラス質'}],[{en:'Lot',ja:'ロット'},'25,000 – 50,000 MT'],[{en:'Shipment',ja:'輸送'},{en:'Bulk vessel',ja:'バラ積み船'}]],
    use:{en:['Slag cement','Ready-mix concrete','Lower-carbon binders'],ja:['高炉セメント','生コンクリート','低炭素結合材']}}
];
C.L.grades2={en:'Grade guide',ja:'鋼種ガイド'};
C.L.tag={en:'Our line',ja:'私たちの一行'};
})(window.IVC);
