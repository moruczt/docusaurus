---
sidebar_position: 1
---

# Installation Guide

> Original installation guide: [ArchLinux](https://wiki.archlinux.org/title/Installation_guide#Pre-installation)

This document is a guide for installing [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) using the live system booted from an installation medium made from an official installation image. The installation medium provides accessibility features which are described on the page [Install Arch Linux with accessibility options](https://wiki.archlinux.org/title/Install_Arch_Linux_with_accessibility_options). For alternative means of installation, see [Category:Installation process](https://wiki.archlinux.org/title/Category:Installation_process).

Before installing, it would be advised to view the FAQ. For conventions used in this document, see [Help:Reading](https://wiki.archlinux.org/title/Help:Reading). In particular, code examples may contain placeholders (formatted in *`italics`*) that must be replaced manually.

This guide is kept concise and you are advised to follow the instructions in the presented order per section. For more detailed instructions, see the respective [ArchWiki](https://wiki.archlinux.org/title/ArchWiki) articles or the various programs' [man pages](https://wiki.archlinux.org/title/Man_page), both linked from this guide. For interactive help, the [IRC channel](https://wiki.archlinux.org/title/IRC_channel) and the [forums](https://bbs.archlinux.org/) are also available.

Arch Linux should run on any [x86_64](https://en.wikipedia.org/wiki/X86-64)-compatible machine with a minimum of 512 MiB RAM, though more memory is needed to boot the live system for installation.[^1] A basic installation should take less than 2 GiB of disk space. As the installation process needs to retrieve packages from a remote repository, this guide assumes a working internet connection is available.

[^1]: Latest ArchISO breaks 512MB RAM barrier.

# Pre-installation

## Acquire an installation image

Visit the [Download](https://archlinux.org/download/) page and, depending on how you want to boot, acquire the ISO file or a netboot image, and the respective PGP signature.

## Verify signature

It is recommended to verify the image signature before use, especially when downloading from an *HTTP mirror*, where downloads are generally prone to be intercepted to [serve malicious images](https://www2.cs.arizona.edu/stork/packagemanagersecurity/attacks-on-package-managers.html).

On a system with [GnuPG](https://wiki.archlinux.org/title/GnuPG) installed, do this by downloading the ISO PGP signature ([under Checksums in the page Download](https://archlinux.org/download/#checksums)) to the ISO directory, and [verifying](https://wiki.archlinux.org/title/GnuPG#Verify_a_signature) it with:

```bash
$ gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig
```

Alternatively, from an existing Arch Linux installation run:

```bash
$ pacman-key -v archlinux-version-x86_64.iso.sig
```

**Note:**
>* The signature itself could be manipulated if it is downloaded from a mirror site, instead of from [archlinux.org](https://archlinux.org/download/) as above. In this case, ensure that the public key, which is used to decode the signature, is signed by another, trustworthy key. The `gpg` command will output the fingerprint of the public key.
>* Another method to verify the authenticity of the signature is to ensure that the public key's fingerprint is identical to the key fingerprint of the [Arch Linux developer](https://archlinux.org/people/developers/) who signed the ISO-file. See [Wikipedia:Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for more information on the public-key process to authenticate keys.