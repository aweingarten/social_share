README.txt
==========

Social Share adds configurable social network share links to nodes

Links can be added for these social networks:
 - Facebook
 - Twitter
 - Google Buzz
 - Myspace
 - MSN Live
 - Yahoo
 - Linked In
 - Orkut
 - Digg

Links are added to all nodes of the types configured to allow it, and appear
with a class name based on the social network being shared to.

Example:

<a class="social-share-facebook" href="...">Facebook</a>
<a class="social-share-twitter" href="...">Twitter</a>

This facilitates styling the links as icons, or whatever best suits the site.


Facebook Share Dialog
=====================

This version of the module allows you to override Facebook's default share popup and replacing it Facebook's Share Dialog. This is important because the legacy popup is deprecated, and unsupported by Facebook today.

Share Dialog requires that you have a Facebook Application ID. For more details, see: https://developers.facebook.com/docs/sharing/reference/share-dialog.

To enable Share Dialog:
1. Ensure the Social Share module is enabled.
2. Browse to `admin/config/content/social-share`
3. Input your Facebook App ID into the corresponding field.
4. Save the settings.

With Share Dialog enabled, Facebook will use [Open Graph Metadata](http://ogp.me/) for populating the share information (Title, Description, etc.) instead of the values you define for Social Share in your content type. This means that in order to define the Facebook Share Dialog Title or Description, you'll need to embed Open Graph Meta Tags on your webpages. You can do this manually, or by using a contributed module, like the [Metatag](https://www.drupal.org/project/metatag) module.

ICONS
=======
Beginning with the 2.x branch, an icon pack based on the GPL licensed social
media icon set released by elegantthemes.com are included. These icons can be
optionally enabled via the admin config in 16px or 32px sizes.


AUTHOR/MAINTAINER
======================
Will Vincent (will AT willvincent DOT com)
