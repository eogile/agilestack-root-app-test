NAME = root-app-test
IMAGE_NAME = agilestack-$(NAME)

GO_FILES=*.go


############################
#          BUILD           #
############################

# Default goal: build all, up to the docker image
install : docker-build

# Generate the docker image
docker-build : go-build js-build
		docker build -t $(IMAGE_NAME) .

# Compiling the Go code
go-build : $(NAME)

# Compiling the main Go executable
$(NAME) : $(GO_FILES)
		env GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o $(NAME)

# Builds the JavaScript application.
js-build: node_modules lib

# Installs the NodeJS dependencies.
node_modules : package.json
		npm update

# Generate the lib folder
lib: package.json src/*.js
		npm run build


############################
#          SETUP           #
############################

setup: go-deps

# Go dependencies
go-deps :
		go get -t $(shell go list ./... | grep -v /vendor/)


############################
#           TEST           #
############################

test : go-test

# Run the go tests
go-test:
		# in test
		go test -v -p 1 $(shell go list ./... | grep -v /vendor/)


############################
#          DEPLOY          #
############################

# Publish the docker image
docker-deploy :
		docker tag $(IMAGE_NAME) eogile/$(IMAGE_NAME):latest && docker push eogile/$(IMAGE_NAME):latest


############################
#          CLEAN           #
############################

clean :
		$(RM) -r $(NAME) $(SWAGGER_SPEC)

.PHONY : install docker-build go-build setup go-deps test go-test docker-deploy clean
