const checker = {};
try {
  eval('checker.prop ??= 1');
} catch (e) {
  alert('現在お使いのブラウザでは、インターネットバンキングをご利用いただけません。\n当行ホームページ（三菱ＵＦＪダイレクトトップ）から動作確認済環境を確認してください。');
  throw e;
}