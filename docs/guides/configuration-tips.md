---
sidebar_position: 2
title: Configuration Tips
---

# Configure the system

> Original configuration guide: [ArchLinux](https://wiki.archlinux.org/title/Installation_guide#Configure_the_system)

## Fstab

Generate an [fstab](https://wiki.archlinux.org/title/Fstab) file (use `-U` or `-L` to define by [UUID](https://wiki.archlinux.org/title/UUID) or labels, respectively):

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Check the resulting `/mnt/etc/fstab` file, and [edit](https://wiki.archlinux.org/title/Textedit) it in case of errors.

## Chroot

[Change root](https://wiki.archlinux.org/title/Change_root) into the new system:

```bash
arch-chroot /mnt
```

## Time

Set the [time zone](https://wiki.archlinux.org/title/Time_zone):

```bash
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

Run [hwclock(8)](https://man.archlinux.org/man/hwclock.8) to generate `/etc/adjtime`:

```bash
hwclock --systohc
```
This command assumes the hardware clock is set to [UTC](https://en.wikipedia.org/wiki/UTC). See [System time#Time standard](https://wiki.archlinux.org/title/System_time#Time_standard) for details.

To prevent clock drift and ensure accurate time, set up [time synchronization](https://wiki.archlinux.org/title/Time_synchronization) using a [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) client such as [systemd-timesyncd](https://wiki.archlinux.org/title/Systemd-timesyncd).

## Localization

[Edit](https://wiki.archlinux.org/title/Textedit) `/etc/locale.gen` and uncomment `en_US.UTF-8 UTF-8` and other needed UTF-8 [locales](https://wiki.archlinux.org/title/Locale). Generate the locales by running:

```bash
locale-gen
```

[Create](https://wiki.archlinux.org/title/Create) the [locale.conf(5)](https://man.archlinux.org/man/locale.conf.5) file and [set the LANG variable](https://wiki.archlinux.org/title/Locale#Setting_the_system_locale) accordingly:

```bash
/etc/locale.conf
LANG=en_US.UTF-8
```

If you [set the console keyboard layout](https://wiki.archlinux.org/title/Installation_guide#Set_the_console_keyboard_layout_and_font), make the changes persistent in [vconsole.conf(5)](https://man.archlinux.org/man/vconsole.conf.5):

```bash
/etc/vconsole.conf
KEYMAP=de-latin1
```