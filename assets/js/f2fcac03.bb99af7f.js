"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[5901],{6957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151);const a={sidebar_position:3},r="Python Zabbix - Active Directory Federation Services (ADFS) Users Validation",o={id:"scripting/zabbix-ad-user-validation",title:"Python Zabbix - Active Directory Federation Services (ADFS) Users Validation",description:"",source:"@site/docs/scripting/zabbix-ad-user-validation.md",sourceDirName:"scripting",slug:"/scripting/zabbix-ad-user-validation",permalink:"/scripting/zabbix-ad-user-validation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Python Backup Script With AWS S3 Integration",permalink:"/scripting/backup-script"},next:{title:"Git",permalink:"/category/git"}},c={},l=[];function u(e){const n={code:"code",h1:"h1",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"python-zabbix---active-directory-federation-services-adfs-users-validation",children:"Python Zabbix - Active Directory Federation Services (ADFS) Users Validation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="ZabbixUserValidationChecker" showLineNumbers',children:'#!/usr/bin/python3\nfrom pyzabbix import ZabbixAPI\nimport ldap\nimport os\nfrom decouple import config\n\n# Zabbix setup\nzabbix_server = "https://zabbix-example.com/"\nz = ZabbixAPI(zabbix_server)\n## TLS CA certificate bundle\nz.session.verify = "/etc/ssl/certs/example_rca.pem"\n## Use zabbix-proxy environment variable for password\nzabbix_sa_pass = os.getenv(\'ZABBIX_SA_PASS\')\n## Use service account for session\nz.login("sa-internal-audits", zabbix_sa_pass)\n\n# Define your list of aliases to skip\naliases_to_skip = [\n    "Admin", \n    "api", \n    "guest",\n    "sa-internal-audits"\n    ]\n\n# Fetch all users from Zabbix\nusers = z.user.get(output="extend")\n\n# LDAP setup\nldap_server = "ldaps://example.com"\nbase_dn = "OU=Example,DC=prod,DC=example,DC=com"\nldap_login = "sa-auth-monitoring@prod.example.com"\nldap_password = config(\'pass_sa-auth-monitoring\',default=\'\')\nldap_connect = ldap.initialize(ldap_server)\nldap_connect.simple_bind_s(ldap_login, ldap_password)\nldap_connect.set_option(ldap.OPT_REFERRALS, 0)\n\n# Function to check user existence in LDAP\ndef checkUserExistInLDAP(user_alias):\n    object_to_search = f"(&(sAMAccountName={user_alias})(!(userAccountControl:1.2.840.113556.1.4.803:=2)))"\n    try:\n        result = ldap_connect.search_s(base_dn, ldap.SCOPE_SUBTREE, object_to_search, ["userPrincipalName"])\n    except ldap.LDAPError as e:\n        print("LDAP Search Error:", e)\n        return False\n    return len(result) > 0\n\n# Initialize lists to collect users based on their LDAP status\nnot_active_users = []\nskipped_users = []\nactive_users = []\n\n# Iterate over Zabbix users and check them against LDAP\nfor user in users:\n    alias = user[\'alias\']\n    # Skip LDAP check for aliases in the skip list or if "Pagerduty" is in the alias (case-insensitive)\n    if alias in aliases_to_skip or "pagerduty" in alias.lower():\n        skipped_users.append(f"{user[\'name\']} {user[\'surname\']} (Alias: {alias})")\n        continue\n    # Assuming the alias\n    if checkUserExistInLDAP(alias):\n        active_users.append(f"{user[\'name\']} {user[\'surname\']} (Alias: {alias})")\n    else:\n        not_active_users.append(f"{user[\'name\']} {user[\'surname\']} (Alias: {alias})")\n\n# Only build and print the FlockML message if there are inactive users\nif not_active_users:\n    # Create FlockML output\n    flockml_output = "<flockml>"\n\n    # Output NOT Active in AD users first\n    flockml_output += f"<b>NOT Active in AD ({len(not_active_users)}):</b><br/>" + "<br/>".join(not_active_users) + "<br/><br/>"\n\n    # Output skipped users (count only)\n    flockml_output += f"<b>Skipped checks:</b> {len(skipped_users)}<br/>"\n\n    # Output Active in AD users (count only)\n    flockml_output += f"<b>Active in AD:</b> {len(active_users)}<br/>"\n\n    # Output Total Zabbix Users\n    total_users_count = len(users)\n    flockml_output += f"<b>Total Users in Zabbix:</b> {total_users_count}<br/>"\n\n    # Close FlockML tag\n    flockml_output += "</flockml>"\n\n    # Print the final FlockML output\n    print(flockml_output)\n# If there are no inactive users, do nothing.\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);