Vagrant.configure("2") do |config|
  config.vm.define "pupper" do |app|
    app.vm.provider "docker" do |d|
      d.build_dir = "./"
      d.ports = [ "80:80" ]
    end
  end
end