export interface surahData{
  code: number;
  data?:any[];
  statik: string;
}

export interface surah {
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revalationType: string;
}

export interface single {
arabic_text: string;
aya: string;
footnotes: string;
id: string;
sura:string;
translation: string;
}
