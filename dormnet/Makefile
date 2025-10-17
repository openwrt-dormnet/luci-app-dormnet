include $(TOPDIR)/rules.mk

PKG_NAME:=dormnet
PKG_VERSION:=0.1.0
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_SOURCE_SUBDIR:=$(PKG_NAME)-$(PKG_VERSION)
PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/openwrt-dormnet/dormnet.git
PKG_MIRROR_HASH:=1b5ad012709ffe6f087a10769be6dea77b07bf8b866cdd9f8e6ab3d98c6d7986

PKG_LICENSE:=AGPL3.0
PKG_MAINTAINER:=Haven Madray <sgpublic2002@gmail.com>

PKG_BUILD_DEPENDS:=golang/host
PKG_BUILD_PARALLEL:=1
PKG_BUILD_FLAGS:=no-mips16

PKG_BUILD_TIME:=$(shell date -u -Iseconds)

GO_PKG:=github.com/openwrt-dormnet/dormnet
GO_PKG_LDFLAGS_X:=$(GO_PKG)/internal.constants.version=$(PKG_VERSION) $(GO_PKG)/internal.constants.buildTime=$(PKG_BUILD_TIME)
GO_PKG_LDFLAGS:=-s -w

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/dormnet
  SECTION:=net
  CATEGORY:=Network
  TITLE:=DormNet
  URL:=https://github.com/openwrt-dormnet/dormnet
  DEPENDS:=$(GO_ARCH_DEPENDS) +luci-app-mwan3
  PROVIDES:=dormnet
endef

define Package/dormnet/description
  Manage your campus network with DormNet on OpenWrt.
endef

define Package/dormnet/conffiles
/etc/config/dormnet
endef

define Package/dormnet/install
	$(call GoPackage/Package/Install/Bin,$(1))

	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/dormnet $(1)/usr/bin/dormnet
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./root/etc/init.d/dormnet $(1)/etc/init.d
endef

$(eval $(call GoBinPackage,dormnet))
$(eval $(call BuildPackage,dormnet))
