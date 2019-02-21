workflow "Main" {
  on = "push"
  resolves = [
    "Test",
    "Prebuild libraries",
    "Install dependencies",
  ]
}

action "Select master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install dependencies" {
  uses = "actions/npm@master"
  needs = ["Select master branch"]
  args = "install"
}

action "Prebuild libraries" {
  uses = "actions/npm@master"
  needs = ["Install dependencies"]
  args = "run prebuild"
}

action "Lint" {
  uses = "actions/npm@master"
  needs = ["Prebuild libraries"]
  args = "run lint"
}

action "Test" {
  uses = "actions/npm@master"
  needs = ["Prebuild libraries"]
  args = "run test"
}

action "Build" {
  uses = "actions/npm@master"
  needs = ["Lint", "Test"]
  args = "run build"
}

action "Tag" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = "Tag"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
