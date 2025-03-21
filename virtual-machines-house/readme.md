# virtual-machines-house

Virtual Machines House app is designed to run on Apple Silicon based Mac computers.

Using Virtual Machines House app can be used to generate arm64 based virual Mac and Linux systems.

Linux virtual machines:<br>
To create a virtual Linux system, an arm64 based ISO image file that supports virtiofs is required.<br>
For example to create Alpine Linux, download aarch64 iso file under VIRTUAL heading at https://alpinelinux.org/downloads/ and use it in the app.

Shared directories on Mac virtual machines:<br>
Shared directories in macOS VMs are only available in macOS 13 and later.<br>
The shared directories are automatically mounted at /Volumes/My Shared Files/. They can be seen in the Finder.

Shared directories on Linux virtual machines with virtio file system:<br>
Execute the following command on a terminal in the virtual machine to mount the shared folders of the host machine.<br>
mount -t virtiofs shared-folder directory<br>
For example, to mount the shared folders of the host machine on to the /tmp folder of the guest virtual machine, use:<br>
mount -t virtiofs shared-folder /tmp<br>

Terminology:<br>
Mac computers:<br>
A computer made by Apple that has an operating system called macOS. Example: MacBook Pro, MacBook Air, Macmini, Mac Studio, and iMac.<br>

Host machine:<br>
A Mac machine that runs Virtual Machines House app.<br>

Virtual machine:<br>
A guest macOS or Linux based systems running with the Virtual Machines House app.<br>
