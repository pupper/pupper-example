Vagrant.configure("2") do |config|
  config.vm.define "pupper" do |app|
    app.vm.provider "docker" do |d|
      d.build_dir = "./"
      d.ports = [ "8080:80", "1337:1337" ]
    end
  end
end