# define commitFunc
# 	$(shell node -p "require('./configs/package.json').$(1)")
# endef

# commit := ${call commitFunc,version}

build: 
	yarn build

push:
	git add . && git commit -m "$(commit)" && git push origin main