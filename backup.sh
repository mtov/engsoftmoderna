nome="engsoftmoderna-backup-$(date +%Y)-$(date +%m).zip"
echo git archive -o "$nome" HEAD
git archive -o "$nome" HEAD
echo cp "$nome" ../Dropbox/_backup-all/engsoftmoderna
cp "$nome" ../Dropbox/_backup-all/engsoftmoderna
echo "Não esquecer de apagar $nome"