all:

lineage:
	echo "lineage needs to be prepared"
	-rm /tmp/kati.log
	mkdir -p $(CURDIR)/$(DATE)
	cd kati; make
	cp kati/ckati ~/lineage/prebuilts/build-tools/linux-x86/bin/ckati
	cd ~/lineage/; source build/envsetup.sh; lunch lineage_jfltexx-userdebug; make clean; \
		$(CURDIR)/monitor.sh make showcommands 2>&1 | tee $(CURDIR)/$(DATE)/compile_kati.txt

lineage-process:
	cat /tmp/kati.log  | grep -ia LOAD-file > kati_jfltexx_list_filter.txt
	perl first_kati.pl kati_jfltexx_list_filter.txt kati_jfltexx_list_first.txt
	perl last_kati.pl kati_jfltexx_list_filter.txt kati_jfltexx_list_last.txt

lineage-process-config:
	#-rm -rf kati_lineage_config-out
	mkdir -p kati_lineage_config-out
	/usr/bin/perl kati-dep-tree.pl \
		--lineage $(HOME)/lineage \
		--base build/make/core/config.mk \
		--out kati_lineage_config-out  \
		kati_jfltexx_list_first.txt index.html
	google-chrome --allow-file-access-from-files kati_lineage_config-out/index.html


lineage-process-main:
	#-rm -rf kati_lineage_main-out
	mkdir -p kati_lineage_main-out
	/usr/bin/perl kati-dep-tree.pl \
		--lineage $(HOME)/lineage \
		--base build/make/core/main.mk \
		--out kati_lineage_main-out  \
		kati_jfltexx_list_last.txt index.html
	google-chrome --allow-file-access-from-files kati_lineage_main-out/index.html


